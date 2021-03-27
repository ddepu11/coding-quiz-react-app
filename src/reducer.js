import { SET_INPUT, SET_LOADING, SET_QUIZES } from "./actions";

const reducer = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_QUIZES:
      return {
        ...state,
        quizes: payload,
        loading: false,
        hasQuizStarted: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export { reducer };
