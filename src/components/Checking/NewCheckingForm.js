import { useState } from "react";

export const NewCheckingForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    balance: 0.0,
    minBalance: 0.0,
  });

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: parseFloat(e.target.value),
      };
    });
  };

  return (
    <div className="grid min-h-screen place-items-center w-full">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 className="text-xl font-semibold">
          Hello there 👋,{" "}
          <span className="font-normal">
            please fill in your account information to continue
          </span>
        </h1>
        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(formData, "checking");
          }}
        >
         
          <label
            htmlFor="balance"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Account Balance
          </label>
          <input
            id="balance"
            type="number"
            step="0.01"
            name="balance"
            placeholder="$0.00"
            onChange={onChange}
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            htmlFor="min_balance"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Minimum Balance
          </label>
          <input
            id="minBalance"
            type="number"
            step="0.01"
            name="minBalance"
            placeholder="$0.00"
            onChange={onChange}
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
