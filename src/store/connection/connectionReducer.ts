import type { Reducer } from "redux";
import { ConnectionActionType, type ConnectionState } from "./connectionTypes";

export const initialState: ConnectionState = {
  id: undefined,
  loading: false,
  list: [],
  selectedId: undefined,
};

export const ConnectionReducer: Reducer<ConnectionState> = (
  state = initialState,
  action,
) => {
  if (action.type === ConnectionActionType.CONNECTION_INPUT_CHANGE) {
    const { id } = action as any;
    return { ...state, id };
  } else if (action.type === ConnectionActionType.CONNECTION_CONNECT_LOADING) {
    const { loading } = action as any;
    return { ...state, loading };
  } else if (action.type === ConnectionActionType.CONNECTION_LIST_ADD) {
    const newList = [...state.list, (action as any).id];
    if (newList.length === 1) {
      return { ...state, list: newList, selectedId: (action as any).id };
    }
    return { ...state, list: [...state.list, (action as any).id] };
  } else if (action.type === ConnectionActionType.CONNECTION_LIST_REMOVE) {
    const newList = [...state.list].filter((e) => e !== (action as any).id);
    if (state.selectedId && !newList.includes(state.selectedId)) {
      if (newList.length === 0) {
        return { ...state, list: newList, selectedId: undefined };
      }
      return { ...state, list: newList, selectedId: newList[0] };
    }
    return { ...state, list: newList };
  } else if (action.type === ConnectionActionType.CONNECTION_ITEM_SELECT) {
    return { ...state, selectedId: (action as any).id };
  }
  return state;
};
