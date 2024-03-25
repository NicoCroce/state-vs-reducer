import React from "react";
import { ActionType } from "./store/reducer";

export interface ContextStateProviderProps {
  children: React.ReactNode;
}

export type Context = {
  state: string;
  setState: (param: string) => void;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IStoreReducerContextProvider {
  children: React.ReactNode;
}

type UserInformation = {
  name: string;
  userName: string;
};

export type InitialState = {
  text: string;
  items: string[];
  userInformation: UserInformation;
};

export type Action = (type: ActionType, payload: string) => void;

export interface IStoreReducerContext {
  store: InitialState;
  dispatch: Action;
}

export type ActionReducer = {
  type: ActionType;
  payload: any;
};

export interface IContextState {
  state: InitialState;
  changeText: (text: string) => void;
  changeUserName: (userName: string) => void;
}
