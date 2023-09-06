import { createContext, useContext } from "react";

export interface AppState {
  introDone: boolean;
  setIntroDone: (done: boolean) => void;
}

export const AppContext = createContext<AppState>({
  introDone: false,
  setIntroDone: () => null,
});

export function useAppContext(): AppState {
  return useContext(AppContext);
}
