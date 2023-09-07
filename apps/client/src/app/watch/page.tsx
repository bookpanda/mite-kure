"use client";

import { useSearchParams } from "next/navigation";
import { Watch } from "../../modules/Watch";
import { useAppContext } from "../../core/context/app-context";

export default function WatchPage(): JSX.Element {
  const searchParams = useSearchParams();
  const { setUrl } = useAppContext();
  const url = searchParams.get("url");
  setUrl(url || "");
  return <Watch />;
}
