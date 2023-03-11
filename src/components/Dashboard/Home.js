import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="basis-3/4 w-full bg-gray-100  text-gray-800">
      <div className="p-4 w-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">
                  <div className="col-span-12 lg:col-span-8">
                    <button
                      className="inline-block rounded-full text-white 
                            bg-indigo-700
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 "
                      onClick={() => navigate("/accounts/checking")}
                    >
                      Checking
                    </button>
                  </div>
                </div>
                <div className="font-bold text-lg">
                  ${sessionStorage.getItem("checkAccountsTotal")}
                </div>
                <span className="text-green-500">▲ 2.48%</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">
                  <div className="col-span-12 lg:col-span-8">
                    <button
                      className="inline-block rounded-full text-white 
                            bg-black
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 "
                      onClick={() => navigate("/accounts/savings")}
                    >
                      Savings
                    </button>
                  </div>
                </div>
                <div className="font-bold text-lg">
                  ${sessionStorage.getItem("saveAccountsTotal")}
                </div>
                <span className="text-gray-500">- 0.00%</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="hidden flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">
                  <div className="col-span-12 lg:col-span-8">
                    <button
                      className="inline-block rounded-full text-black
                            bg-green-500
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 "
                    >
                      Loans
                    </button>
                  </div>
                </div>
                <div className="font-bold text-lg">$3,148.45</div>
                <span className="text-red-500">▲ 0.12%</span>
              </div>
            </div>
          </div>
          <div className="hidden col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">
                  <div className="col-span-12 lg:col-span-8">
                    <button
                      className="inline-block rounded-full text-black
                            bg-yellow-500
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 "
                    >
                      Credit Cards
                    </button>
                  </div>
                </div>
                <div className="font-bold text-lg">$1,128.35</div>
                <span className="text-green-500">▼ 0.30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
