import { useState, useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
// make sure to use https
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("superman");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
