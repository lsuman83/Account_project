import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineSetting, AiFillBank } from "react-icons/ai";
import landon from "../../images/Landon.png";
export const Navbar = () => {
  const navigate = useNavigate();
  const [inHover, setHover] = useState(false);

  return (
    <div className="relative">
      <nav className="flex flex-col bg-purple-900 h-full w-64 px-4 text-gray-900 border border-blue-900">
        <div className="flex flex-wrap mt-8">
          <div className="w-1/2">
            <NavLink to="/profile">
              <img
                src={landon}
                className="mx-auto w-20 h-20 rounded-full hover:opacity-75"
                alt="User"
              />
            </NavLink>
          </div>
          <div className="w-1/2 mt-4">
            <span className="font-semibold text-white">Landon Bordelon</span>
          </div>
        </div>
        <div className="mt-10 mb-4">
          <ul className="ml-4">
            <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                            4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                            4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
              <NavLink to="/">
                <span className="ml-2">Dashboard</span>
              </NavLink>
            </li>
            <li
              onMouseEnter={() => setHover(!inHover)}
              onMouseLeave={() => setHover(false)}
              className="mb-2 px-4 py-4 text-gray-100 flex flex-row flex-shrink-0 border-gray-300 hover:text-black hover:bg-gray-300  hover:font-bold rounded rounded-lg"
            >
              <AiFillBank className="h-6 w-6" />
              <div className="flex-col">
                
                <span className="ml-2">Accounts</span>
            
                {inHover && (
                  <nav className="py-2">
                    <NavLink to="/accounts/checking"
                      className="block px-4 py-2 mt-2 text-md font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 hover:text-black dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-gray-900 hover:bg-purple-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-center"
                    >
                      Checking
                    </NavLink>
                    <NavLink to="/accounts/savings"
                      activeClassName="bg-blue-300"
                      className="block px-4 py-2 mt-2 text-md font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 hover:text-black dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-gray-900 hover:bg-purple-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-center"
                    >
                      Savings
                    </NavLink>
                    <a
                      href="b"
                      className="hidden block px-4 py-2 mt-2 text-md font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 hover:text-black dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-gray-900 hover:bg-purple-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-center"
                    >
                      Loans
                    </a>
                    <a
                      href="b"
                      className="hidden block px-4 py-2 mt-2 text-md font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 hover:text-black dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-gray-900 hover:bg-purple-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-center"
                    >
                      Credit Cards
                    </a>
                  </nav>
                )}
              </div>
            </li>
            <li className="hidden mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                    d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                            2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                            00-2-2h-1V1m-1 11h-5v5h5v-5z"
                  ></path>
                </svg>
              </span>
              <NavLink to="/calendar">
                <span className="ml-2">Calendar</span>
              </NavLink>
            </li>
            <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-6 w-6 " viewBox="0 0 24 24">
                  <IoBookSharp />
                </svg>
              </span>
              <NavLink to="/resources">
                <span className="ml-2">Financial Resources</span>
              </NavLink>
            </li>
            <li className="hidden mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                            014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                            8-4z"
                  ></path>
                </svg>
              </span>
              <NavLink to="/about">
                <span className="ml-2">About</span>
              </NavLink>
            </li>
            <li className="hidden mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <span>
                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                  <path
                    d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                            4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                            9v2h-4v-2h4m2-2h-8v6h8v-6z"
                  ></path>
                </svg>
              </span>
              <NavLink to="/contacts">
                <span className="ml-2">Contacts</span>
              </NavLink>
            </li>
            <li className="hidden mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
              <span>
                <svg
                  className="fill-current h-8 w-8 "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <AiOutlineSetting />
                </svg>
              </span>
              <NavLink to="/settings">
                <span className="">Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <button
              onClick={() => navigate("/login")}
              className="absolute m-auto left-0 right-0 bottom-0 mb-5 w-3/4 bg-blue-400 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500"            >
              Logout
            </button>
      </nav>
    </div>
  );
};
