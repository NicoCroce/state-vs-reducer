import { useContext } from "react";
import { ContextState } from "./StateContext";

/**
 * Layer between Context using state and UI
 */

export const useContextState = () => {
  const { state, changeText, changeUserName } = useContext(ContextState);
  // Do something...and return values. In this case, the complete state, filtered and actions.

  // Splite text and userName.
  const text = state.text || "";
  const userName = state.userInformation.userName || "";

  return { state, changeText, changeUserName, text, userName };
};
