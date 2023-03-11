import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SavingsAccountList } from "../../components/Savings/SavingsAccountList";
export const SavingsAccountsContainer = () => {
  const totalReducer = (state, price) => {
    return state + price;
  };

  const navigate = useNavigate();
  const [saveAccountData, setSaveAccountData] = useState([]);
  const [saveTotal, setSaveTotal] = useReducer(totalReducer, 0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/savings`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setSaveAccountData(data);
        data.map((account) => setSaveTotal(account.balance));
      });
  }, []);

  return (
    <div className="w-full">
      {sessionStorage.setItem(
        "saveAccountsTotal",
        JSON.stringify(parseFloat(saveTotal.toFixed(2)))
      )}
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Savings Accounts</h2>
            <span className="text-xs">All Accounts list</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div className="lg:ml-40 ml-10 space-x-8">
              <button onClick={() => navigate("/accounts/savings/new")} className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                New Account
              </button>
            </div>
          </div>
        </div>

        <SavingsAccountList saveAccountsList={saveAccountData} />
      </div>
    </div>
  );
};
