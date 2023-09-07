import { createContext, useContext } from "react";

export interface AppState {
  introDone: boolean;
  setIntroDone: (done: boolean) => void;
  url: string;
  setUrl: (url: string) => void;
  startYouTube: boolean;
  setStartYouTube: (start: boolean) => void;
}

export const AppContext = createContext<AppState>({
  introDone: false,
  setIntroDone: () => null,
  url: "",
  setUrl: () => null,
  startYouTube: false,
  setStartYouTube: () => null,
});

export function useAppContext(): AppState {
  return useContext(AppContext);
}
