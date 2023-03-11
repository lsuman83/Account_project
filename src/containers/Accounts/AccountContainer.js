import { CheckingAccountInfo } from '../../components/Checking/CheckingAccountInfo'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const AccountContainer = () => {
   
    const { accountId } = useParams();
    const [accountData, setAccountData] = useState();    
    const [loadingAccount, setLoadingAccount] = useState(false);
    const [loadingTrans, setLoadingTrans] = useState(false);
    const [transData, setTransData] = useState([]);
    const url = `${process.env.REACT_APP_BACKEND_URL}/checking/${accountId}`;
    const url2 = `${process.env.REACT_APP_BACKEND_URL}/${accountId}/transactions`;

    
    useEffect(() => {
        const fetchAccount = async () => { 
            const response  = await fetch(url, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            if(response.ok){
                const data = await response.json();
        
                setAccountData(data);
                setLoadingAccount(false);
            }else{
                const error = await response.json();
            
                console.error(error);
            }
        }

        const fetchAccountTransactions = async () => {
            const response = await fetch(url2, {
              method: 'GET',
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              }
            })
              if(response.ok){
                const tData = await response.json();
                setTransData(tData);
                setLoadingTrans(false);
              }else{
                const error = await response.json();
          
                console.error(error);
          }
        }

        fetchAccount()
        fetchAccountTransactions()
    },[url, url2])

    const handleSubmit = (data, acctNum) => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/${acctNum}/transactions`
        
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(data)
        }).then((response) => {
            if(response.ok){
                return response.json();
            }
        }).then((trData) => {
            window.location.reload()
            console.log(trData)
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return(
        <div className="w-full">
        {loadingAccount && loadingTrans ? <h1>Loading...</h1> :
        (accountData === undefined || accountData === null ? `No account found with ${accountId}` : <CheckingAccountInfo accountInfo={accountData} handleSubmit={(data, acctNum) => handleSubmit(data, acctNum)} transList={transData}/>)}
        </div>

    )
}