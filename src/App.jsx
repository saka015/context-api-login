import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

const App = () => {
  return (
    <UserContextProvider>
      {/* //or UserContext.Provider : both are same */}

      <Login/>
      <Profile/>
    </UserContextProvider>
  );
};

export default App;
