import { CheckingAccountInfo } from "./CheckingAccountInfo";
import { CheckingAccountListInfo } from "./CheckingAccountListInfo";
export const CheckingAccountList = ({ checkAccountsList }) => {
  const handleRemoveAccount = (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/checking/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Successfully deleted");
          window.location.reload(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-10">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
         
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Account #
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Balamce
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Minimum Balance
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {checkAccountsList
                ? checkAccountsList.map((account) => (
                    <CheckingAccountListInfo
                      key={account.id}
                      accountInfo={account}
                      handleRemoveClick={(id) => handleRemoveAccount(id)}
                    />
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
