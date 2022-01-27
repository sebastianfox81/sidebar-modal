import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  return <AppContext.Provider value="hello world">{children}</AppContext.Provider>
}

// CUSTOM HOOK

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider }