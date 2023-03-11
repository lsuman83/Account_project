import { useParams } from 'react-router'
export const TransInfo = ({ transInfo, handleEdit }) => {

    const params = useParams();
    const url = `${process.env.REACT_APP_BACKEND_URL}/${params.accountId}/transactions/${transInfo.transactionId}`
    const handleDelete = (e) => {
        
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
            })
    }

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td class="p-4 w-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-1"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-1" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {transInfo.createdAt}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {transInfo.transactionDesc}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {transInfo.transactionType}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${transInfo.transactionAmount}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button type="click" className="underline text-blue-500 text-bold border-white" onClick={(e) => {e.preventDefault(); handleEdit()}}>Edit</button>
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <button type="click" className="underline text-red-500" onClick={(e) => {e.preventDefault(); handleDelete(e)}}>Delete</button>
      </td>
    </tr>
  );
};
