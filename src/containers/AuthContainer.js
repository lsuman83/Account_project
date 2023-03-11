import { useLocation, useNavigate } from "react-router-dom";
import { LoginPage } from "../components/Auth/LoginPage";
import { login, signup } from "../actions/auth";
import { SignupPage } from "../components/Auth/SignupPage";
import { AuthContext } from "../App";
import React from "react";
export const AuthContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = React.useContext(AuthContext);

  const handleLogin = (credentials) => {
    login(credentials, dispatch);
    navigate("/");
  };

  const handleSignup = (credentials) => {
    signup(credentials, dispatch);
    navigate("/");
  };
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="l" className="bg-black text-white font-bold text-xl p-4">
            Logo
          </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          {location.pathname === "/login" ? (
            <LoginPage
              handleLogin={(credentials) => handleLogin(credentials)}
            />
          ) : (
            <SignupPage
              handleSignup={(credentials) => handleSignup(credentials)}
            />
          )}
        </div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/IXUM4cJynP0"
          alt="nothing"
        />
      </div>
    </div>
  );
};
