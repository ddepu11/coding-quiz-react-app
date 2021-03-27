import { SET_INPUT } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
      };
  }
};
export { reducer };
