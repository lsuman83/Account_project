import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Calendar } from "./components/Calendar";
import { About } from "./components/Dashboard/About";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Home } from "./components/Dashboard/Home";
import { ProfilePage } from "./components/Dashboard/ProfilePage";
import { AccountContainer } from './containers/Accounts/AccountContainer';
import { NewAccountFormContainer} from './containers/Accounts/NewAccountFormContainer';
import { CheckingAccountsContainer } from './containers/Accounts/CheckingAccountsContainer';
import { SavingsAccountsContainer } from './containers/Accounts/SavingsAccountsContainer';
import { AuthContainer } from "./containers/AuthContainer";
import { FinancialResourceContainer } from "./containers/FinancialResourceContainer";
import { authReducer, initialState } from "./reducers/auth";

export const AuthContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  
  return (
    <div>
      <AuthContext.Provider value={{ state, dispatch }}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />}/>
              <Route
                path="/resources"
                element={<FinancialResourceContainer />}
              />
              <Route
                key="checking"
                path="/accounts/checking"
                element={<CheckingAccountsContainer />}
              />
                <Route key="checking" path="/accounts/checking/new" element={<NewAccountFormContainer />}/>
                <Route
                  path="/accounts/checking/:accountId"
                  element={<AccountContainer />}/>
           
              <Route
                key="savings"
                path="/accounts/savings"
                element={<SavingsAccountsContainer />}/>
                <Route key="savings" path="/accounts/savings/new" element={<NewAccountFormContainer />}/>
              
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route key="signup" path="/signup" element={<AuthContainer />} />
            <Route key="login" path="/login" element={<AuthContainer />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
