import { createContext, useContext } from "react";

export interface AppState {
  uploaded: boolean;
}

export const AppContext = createContext<AppState>({
  uploaded: false,
});

export function useAppContext(): AppState {
  return useContext(AppContext);
}
