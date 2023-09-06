"use client";

import type { PropsWithChildren } from "react";
import type { AppState } from "./app-context";
import { AppContext } from "./app-context";

export function AppProvider({ children }: PropsWithChildren): JSX.Element {
  const context: AppState = { uploaded: false };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
