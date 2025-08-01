import React, { useContext } from "react";
import usercContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(usercContext);
  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Welcome {user.username}</p>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
}

export default Profile;
