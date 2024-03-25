/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { StoreReducerContext } from "./StoreReducerContext";

/**
 * Layer between Context using reducer and UI
 */

export const useStore = () => {
  const { dispatch, store } = useContext(StoreReducerContext);

  // Create function to change Store.
  const changeText = (text: string) => {
    dispatch("UPDATE_TEXT", text);
  };

  // Create function to change Store.
  const changeUserName = (userName: string) => {
    dispatch("UPDATE_USER_NAME", userName);
  };

  // Filter text inside Store.
  const text = store.text;
  // Filter userName inside Store.
  const userName = store?.userInformation?.userName;

  // Do something... return values and actions.
  return {
    changeText,
    changeUserName,
    store,
    text,
    userName,
  };
};
