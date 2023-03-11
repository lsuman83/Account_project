import { useState } from "react";
export const LoginPage = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <form
        className="flex flex-col pt-3 md:pt-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(credentials);
        }}
      >
        <div className="flex flex-col pt-4">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="your@email.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <input
          type="submit"
          value="Log In"
          className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
      <div className="text-center pt-12 pb-12">
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="underline font-semibold">
            Register here.
          </a>
        </p>
      </div>
    </div>
  );
};
