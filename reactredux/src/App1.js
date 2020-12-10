import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useState } from "react";

function App() {
  const CLIENT_ID =
    "152542477921-impjp8so56bf2nrhp9f1jfksq9cupf2q.apps.googleusercontent.com";
  const responseGoogle = (response) => {
    if (response.profileObj) {
      setLoggeIn(true);
      setProfileData(response.profileObj);
    } else if (response.error) {
      alert(response.error);
    }
  };
  const logout = (response) => {
    setLoggeIn(false);
    setProfileData(null);
  };
  const [isLoggedIn, setLoggeIn] = useState(false);
  const [profileData, setProfileData] = useState(null);
  console.log(profileData);

  return (
    <div className="App">
      {isLoggedIn || (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {isLoggedIn && (
        <>
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
          <TodoInput />
          <TodoList />
        </>
      )}
    </div>
  );
}

export default App;
