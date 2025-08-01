import React from "react";
import usercContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <>
      <usercContext.Provider value={{ user, setUser }}>
        {children}
      </usercContext.Provider>
    </>
  );
};

export default UserContextProvider;
