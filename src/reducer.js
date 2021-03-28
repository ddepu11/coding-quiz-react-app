import {
  SET_INPUT,
  SET_LOADING,
  SET_QUIZES,
  NEXT_QUESTION,
  CORRECT_QUESTION,
  RESTART_QUIZ,
} from "./actions";

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
        showResult:
          state.currentQuestionIndex === state.quizes.length - 1 ? true : false,
        currentQuestionIndex:
          state.currentQuestionIndex === state.quizes.length - 1
            ? state.currentQuestionIndex
            : state.currentQuestionIndex + 1,
      };

    case CORRECT_QUESTION:
      return {
        ...state,
        correctAnsweres: state.correctAnsweres + 1,
      };
    case RESTART_QUIZ:
      return {
        ...state,
        quizes: [],
        loading: false,
        hasQuizStarted: false,
        currentQuestionIndex: 0,
        correctAnsweres: 0,
        showResult: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export { reducer };
