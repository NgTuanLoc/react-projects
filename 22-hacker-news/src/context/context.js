import { useContext, useEffect, useReducer, createContext } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "../actions/actions";
import reducer from "../reducers/reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };