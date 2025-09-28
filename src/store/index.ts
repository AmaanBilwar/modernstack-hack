import { configureStore } from "@reduxjs/toolkit";
import { PeerReducer } from "./peer/peerReducer";
import { ConnectionReducer } from "./connection/connectionReducer";

export const store = configureStore({
  reducer: {
    peer: PeerReducer,
    connection: ConnectionReducer,
  },
});

// Attach store to window in browser only for debugging parity
if (typeof window !== "undefined") {
  (window as any).store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
