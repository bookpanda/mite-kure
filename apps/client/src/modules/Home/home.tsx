"use client";
import { useAppContext } from "../../core/context/app-context";
import { Intro } from "../Intro";
import { Youtube } from "../YouTube";

export function Home(): JSX.Element {
  const { introDone } = useAppContext();
  return <>{!introDone ? <Intro /> : <Youtube />}</>;
}
