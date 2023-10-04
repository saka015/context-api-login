import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className=" welcome m-4 bg-red-500 w-36 text-center p-1 text-white">
        Please Login!
      </div>
    );

  return (
    <div className="welcome m-4 bg-yellow-500 w-36 text-center p-1 text-white">
      Welcome {user.username}
    </div>
  );
};

export default Profile;
