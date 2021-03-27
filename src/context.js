import { useContext, createContext, useReducer } from "react";
import { SET_INPUT } from "./actions";
import { reducer } from "./reducer";

const AppContext = createContext();

const initialState = {
  category: "Linux",
  difficulty: "Easy",
  questions: 5,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    const { value, name } = e.target;
    console.log({ value, name });
    dispatch({ type: SET_INPUT, payload: { name, value } });
  };

  // const handleLimit = (e) => {};
  // const handleDifficulty = (e) => {};

  return (
    <AppContext.Provider value={{ ...state, handleInput }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
