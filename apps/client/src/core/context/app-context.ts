import { createContext, useContext } from "react";

export interface AppState {
  introDone: boolean;
  setIntroDone: (done: boolean) => void;
  url: string;
  setUrl: (url: string) => void;
}

export const AppContext = createContext<AppState>({
  introDone: false,
  setIntroDone: () => null,
  url: "",
  setUrl: () => null,
});

export function useAppContext(): AppState {
  return useContext(AppContext);
}
