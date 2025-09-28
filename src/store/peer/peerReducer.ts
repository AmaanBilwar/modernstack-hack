import type { Reducer } from "redux";
import { PeerActionType, type PeerState } from "./peerTypes";

export const initialState: PeerState = {
  id: undefined,
  loading: false,
  started: false,
};

export const PeerReducer: Reducer<PeerState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case PeerActionType.PEER_SESSION_START: {
      const { id } = action as any;
      return { ...state, id, started: true };
    }
    case PeerActionType.PEER_SESSION_STOP:
      return { ...initialState };
    case PeerActionType.PEER_LOADING: {
      const { loading } = action as any;
      return { ...state, loading };
    }
    default:
      return state;
  }
};
