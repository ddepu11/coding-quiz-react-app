import { SET_INPUT } from "./actions";

const reducer = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [payload.name]: payload.value,
      };
  }
};
export { reducer };
