/***! REF
 * useContext: https://es.react.dev/reference/react/useContext
 * useReducer: https://es.react.dev/reference/react/useReducer
 */

import { createContext, useReducer } from "react";
import {
  Action,
  IStoreReducerContext,
  IStoreReducerContextProvider,
} from "../types";
import { reducer } from "./reducer";
import { initianState } from "../commons/data";

// Define the context
const StoreReducerContext = createContext({} as IStoreReducerContext);

// Define the provider, this can be done outside of this file, but consolidating everything here improves readability and maintenance.
const StoreReducerContextProvider = ({
  children,
}: IStoreReducerContextProvider) => {
  // Define store and dispatch witn reducer and initialState.
  const [store, _dispatch] = useReducer(reducer, initianState);

  // Return simple version of dispatch.
  const dispatch: Action = (type, payload) => {
    return _dispatch({ type, payload });
  };

  // Return Context.Provider,  store (data) and dispatch (action)
  return (
    <StoreReducerContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreReducerContext.Provider>
  );
};

export { StoreReducerContext, StoreReducerContextProvider };
