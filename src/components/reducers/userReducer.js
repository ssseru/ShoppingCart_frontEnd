import { USER_ADDED } from "../actions/action-types/cart-actions";

const initialState = {
  user: {
    name: "Sai",
    email: "saisseru@gmail.com",
  },
};
export default function(state = initialState, action) {
  switch (action.type) {
    case USER_ADDED:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
