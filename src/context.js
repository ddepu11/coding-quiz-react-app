import { useContext, createContext, useReducer } from "react";
import { SET_INPUT, SET_LOADING, SET_QUIZES } from "./actions";
import { reducer } from "./reducer";

const AppContext = createContext();

const initialState = {
  category: "Linux",
  difficulty: "Easy",
  questions: 5,
  loading: false,
  quizes: [],
  hasQuizStarted: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    const { value, name } = e.target;
    console.log({ value, name });
    dispatch({ type: SET_INPUT, payload: { name, value } });
  };

  const fetchQuizs = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: SET_QUIZES, payload: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const END_POINT = `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&category=${state.category}&difficulty=${state.difficulty}&limit=${state.questions}`;

    fetchQuizs(END_POINT);
  };

  return (
    <AppContext.Provider value={{ ...state, handleInput, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
