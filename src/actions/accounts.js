import { SUCCESSFULLY_LOADED_ACCOUNTS, UNSUCCESSFULLY_LOADED_ACCOUNTS } from './index'
export const getAccounts = (type, dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/${type}`;

    fetch(url, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(async (response) => {
        if (response.ok){
            const accountJson = await response.json();
            dispatch({ type: SUCCESSFULLY_LOADED_ACCOUNTS, payload: accountJson });
        }else{
            const error = await response.json();
            dispatch({ type: UNSUCCESSFULLY_LOADED_ACCOUNTS });
            return await Promise.reject(error);
        }
    })
}