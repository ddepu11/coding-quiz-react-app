import { SET_INPUT, SET_LOADING, SET_QUIZES, NEXT_QUESTION } from "./actions";

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
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex:
          state.currentQuestionIndex === state.quizes.length - 1
            ? state.currentQuestionIndex
            : state.currentQuestionIndex + 1,
      };
    default:
      return {
        ...state,
      };
  }
};
export { reducer };
