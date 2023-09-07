"use client";

import { useState, type PropsWithChildren } from "react";
import type { AppState } from "./app-context";
import { AppContext } from "./app-context";

export function AppProvider({ children }: PropsWithChildren): JSX.Element {
  const [introDone, setIntroDone] = useState(false);
  const [url, setUrl] = useState("");

  const context: AppState = { introDone, setIntroDone, url, setUrl };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
