export const SavingsAccountInfo = ({ accountInfo, handleClick }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-m">
        <div className="mx-5">{accountInfo.accountNumber}</div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-m">
        <p className="text-gray-900 whitespace-no-wrap">
          $ {accountInfo.balance.toFixed(2)}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-m">
        <p className="text-gray-900 whitespace-no-wrap mx-8">
          {accountInfo.interestRate.toFixed(2)} %
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleClick(accountInfo.accountNumber)}
          className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
