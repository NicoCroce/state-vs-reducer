import { InitialState, ActionReducer } from "../types";

// Different actions
export type ActionType = "UPDATE_TEXT" | "UPDATE_USER_NAME";

// This is a function to update the state
export const reducer = (
  state: InitialState,
  { type, payload }: ActionReducer
) => {
  switch (type) {
    case "UPDATE_TEXT":
      return { ...state, text: payload };
    case "UPDATE_USER_NAME":
      return {
        ...state,
        userInformation: {
          ...state.userInformation,
          userName: payload,
        },
      };
    default:
      return state;
  }
};
