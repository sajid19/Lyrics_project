import React from "react";

const MyContext = React.createContext();

const ContextProvider = ({ children }) => {
  return <MyContext.Provider>{children}</MyContext.Provider>;
};
export { MyContext, ContextProvider };
