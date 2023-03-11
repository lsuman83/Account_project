import { useLocation, useNavigate } from "react-router-dom";
import { NewCheckingForm } from '../../components/Checking/NewCheckingForm';
import { NewSavingsForm } from '../../components/Savings/NewSavingsForm';
export const NewAccountFormContainer = () => {
  

  const navigate = useNavigate();
  const location = useLocation();
 

  const handleSubmit = (data, type) => {

    const url = `${process.env.REACT_APP_BACKEND_URL}/${type}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate(`/accounts/${type}`);
  };
  
  return (
    <div>

    {location.pathname === "/accounts/checking/new" ? (
      <NewCheckingForm handleSubmit={(data, tyoe) => handleSubmit(data, tyoe)}/>) :
      location.pathname === "/accounts/savings/new" ? (  
      <NewSavingsForm handleSubmit={(data, tyoe) => handleSubmit(data, tyoe)}/>) : null}
    </div>
  );
};
