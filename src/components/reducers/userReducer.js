import { USER_ADDED } from "../actions/action-types/cart-actions";

const initialState = {
  user: {
    name: "Sai",
    email: "",
  },
};
export default function(state = initialState, action) {
  switch (action.type) {
    case USER_ADDED:
      return {
        ...state,
        user: { ...action.user },
      };
    default:
      return state;
  }
}
