import { SavingsAccountInfo } from "./SavingsAccountInfo";
export const SavingsAccountList = ({ saveAccountsList }) => {
  const handleClick = (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/savings/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Successfully deleted");
          window.location.reload(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-10">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Account #
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Balamce
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Interest Rate
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {saveAccountsList
              ? saveAccountsList.map((account) => (
                  <SavingsAccountInfo
                    key={account.id}
                    accountInfo={account}
                    handleClick={(id) => handleClick(id)}
                  />
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
