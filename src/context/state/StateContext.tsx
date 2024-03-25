/***! REF
 * useContext= https://es.react.dev/reference/react/useContext
 */

import { createContext, useState } from "react";
import {
  ContextStateProviderProps,
  IContextState,
  InitialState,
} from "../types";
import { initianState } from "../commons/data";

// Define the context
const ContextState = createContext<IContextState>({} as IContextState);

// Define the provider, this can be done outside of this file, but consolidating everything here improves readability and maintenance.
const ContextStateProvider = ({ children }: ContextStateProviderProps) => {
  // Define state and action.
  const [state, setState] = useState<InitialState>(initianState);

  //ChangeText function. Update only "text" in the state.
  const changeText = (text: string) => {
    setState((prevState) => ({ ...prevState, text }));
  };

  //ChangeUserName function. Update only "text" in the state.
  const changeUserName = (userName: string) =>
    setState((prevState) => ({
      ...prevState,
      userInformation: {
        ...prevState.userInformation,
        userName,
      },
    }));

  // Return Context.Provider,  state (data) and setState (action)
  return (
    <ContextState.Provider value={{ state, changeText, changeUserName }}>
      {children}
    </ContextState.Provider>
  );
};

// Export Context and Provider.
export { ContextState, ContextStateProvider };
