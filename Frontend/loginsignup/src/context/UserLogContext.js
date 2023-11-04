import React, { createContext, useContext } from "react";

export const LogContext = createContext({
  isUserLoggedIn: false,
  userLocalToken: null,
  userDetails: {},
  //Functions That Controls Object

  toggleUserLog: (value) => {},
  updateLocalToken: (userToken) => {},
  updateUserDetails: (objectF) => {},
});

export const UserContextProvider = LogContext.Provider;

export const useUserContext = () => {
  return useContext(LogContext);
};
