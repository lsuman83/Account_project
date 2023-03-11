import { useState } from "react";
import { TransInfo } from "../Transactions/TransInfo";
export const CheckingAccountInfo = ({
  accountInfo,
  handleSubmit,
  transList,
}) => {
  const [formData, setFormData] = useState({
    account: accountInfo.accountNumber,
    transactionType: "",
    createdAt: "",
    transactionAmount: 0.0,
    transactionDesc: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      if (e.target.id === "transactionAmount") {
        return {
          ...prevState,
          [e.target.id]: parseFloat(e.target.value),
        };
      } else {
        return {
          ...prevState,
          [e.target.id]: e.target.value,
        };
      }
    });
  };
  const handleModal = () => {
    let modal = document.getElementById("modal");
    let hidden = modal.classList.contains("hidden");

    if (hidden) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  };

  
  return (
    <div className="">
      <div className="text-center m-4">
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded-2xl"
          onClick={handleModal}
          type="click"
        >
          Create Transaction
        </button>
      </div>
      <hr className="border-4 border-purple-900" />
      <div class="flex min-h-screen from-purple-100 via-purple-300 to-purple-500 bg-gradient-to-br">
      <div id="modal" class="hidden">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div
      
          class="fixed inset-0 z-10 overflow-y-auto my-100 max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl"
        >
          <div class="max-w-md mx-auto space-y-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(formData, accountInfo.accountNumber);
                handleModal();
              }}
            >
              <h2 class="text-2xl font-bold ">Create a New Transaction</h2>
              <hr class="my-6" />
              <label class="uppercase text-sm font-bold opacity-70">
                Transaction Date
              </label>
              <input
                id="createdAt"
                name="createdAt"
                type="date"
                onChange={handleChange}
                placeholder="2022-21-02"
                class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              />
              <label class="uppercase text-sm font-bold opacity-70">
                Transaction Amount
              </label>
              <input
                id="transactionAmount"
                name="transactionAmount"
                type="number"
                onChange={handleChange}
                placeholder="$12.31"
                class="p-3 mt-2 mb-4 w-full border-2 bg-slate-200 rounded"
                step=".01"
              />
              <label class="uppercase text-sm font-bold opacity-70">
                Transaction Description
              </label>
              <input
                id="transactionDesc"
                name="transactionDesc"
                type="text"
                onChange={handleChange}
                placeholder="Food, Deposit, etc..."
                class="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              />
              <label class="uppercase text-sm font-bold opacity-70">
                Choose Transaction
              </label>
              <select
                id="transactionType"
                name="transactionType"
                onChange={handleChange}
                class="w-full p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              >
                <option disabled selected value>--choose-transaction-type--</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
              <input
                type="submit"
                class="py-3 px-6 my-2 bg-indigo-500 text-white font-medium rounded hover:bg-white hover:text-black cursor-pointer ease-in-out duration-300"
                value="Send"
              />
              <input
                type="button"
                onClick={handleModal}
                class="py-3 px-6 my-2 mx-2 bg-black text-white font-medium rounded hover:bg-white hover:text-black cursor-pointer ease-in-out duration-300"
                value="Cancel"
              />
            </form>
          </div>
        </div>
        </div>      

        <div class="max-w-2xl w-full mt-10 mx-auto">
          <div class="flex flex-col">
            <div class="overflow-auto h-screen shadow-md sm:rounded-lg">
              <div class="inline-block min-w-full align-middle">
                <div class="overflow-x">
                  <table class="table-auto overflow-y-scroll min-w-full max-h-24 divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Transaction Date
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Amount
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white overflow-scroll divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {transList.slice(0,5).map((trans) => (
                        <TransInfo transInfo={trans} handleEdit={handleModal} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-10">
  <div class="p-8 w-52 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
    <div class="text-center">
      <h3 class="text-center text-xl font-bold">Account Number</h3>
      <span class="text-lg"># {accountInfo.accountNumber}</span>
    </div>
    <ul class="mt-16 mb-20 justify-center text-center text-lg">
      <li class=""><span class="font-bold mr-5">Posted Balance:</span>${accountInfo.balance}</li>
      <li class=""><span class="font-bold mr-4">Pending Balance:</span>$4.70</li>
      <li class=""><span class="font-bold mr-5">Minimum Balance:</span>${accountInfo.minBalance}</li>
    </ul>
  </div>
</div>
      </div>
    </div>
  );
};
