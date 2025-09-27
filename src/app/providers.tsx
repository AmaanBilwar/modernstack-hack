"use client";

import type { PropsWithChildren } from "react";
import { store } from "@/store";
// Workaround type conflicts from multiple React type versions in monorepo
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Provider } = require("react-redux") as { Provider: any };

export default function Providers({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
