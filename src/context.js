import { useContext, createContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"Hello"}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext };
