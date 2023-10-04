import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="p-2 log flex flex-col w-48 gap-y-2 mx-[330px] my-6">
      <h2 className="text-center p-2 uppercase text-white">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="bg-green-400 p-1 text-white"  onClick={handleSubmit}>
        Submit
      </button>{" "}
    </div>
  );
};
export default Login;
