import React, { useState, useContext, useEffect, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchingCocktailData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetch(`${url}${searchTerm}`);
      const { drinks } = await data.json();
      if (drinks) {
        const newCocktailList = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktailList);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchingCocktailData();
  }, [searchTerm, fetchingCocktailData]);

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
