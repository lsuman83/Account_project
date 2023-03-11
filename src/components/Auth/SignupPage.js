import { useState } from "react";
export const SignupPage = ({ handleSignup }) => {
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  return (
    <div className="mt-10">
      <form
        className="flex flex-col pt-3 md:pt-8"
        onSubmit={(event) => {
          event.preventDefault();
          if (credentials.password === passwordConfirm) {
            handleSignup(credentials);
          } else {
            window.location.reload(true);
            alert("Passwords don't match");
          }
        }}
      >
        <div className="flex flex-col pt-4">
          <label htmlFor="first_name" className="text-lg">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="John"
            onChange={(e) =>
              setCredentials({ ...credentials, first_name: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="last_name" className="text-lg">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            placeholder="Doe"
            onChange={(e) =>
              setCredentials({ ...credentials, last_name: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
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
            placeholder="Password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="password_confirm" className="text-lg">
            Password Confirmation
          </label>
          <input
            type="password"
            id="password_confirm"
            placeholder="Password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <input
          type="submit"
          value="Sign Up"
          className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
      </form>
      )
      <div className="text-center pt-12 pb-12">
        <p>
          Already have an account?{" "}
          <a href="/login" className="underline font-semibold">
            Log In.
          </a>
        </p>
      </div>
    </div>
  );
};
