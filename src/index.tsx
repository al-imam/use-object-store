import { useReducer } from "react";

function useObjectStore<StoreType>(init: StoreType) {
  return useReducer(
    (prev: StoreType, next: Partial<StoreType>): StoreType => ({
      ...prev,
      ...next,
    }),
    init
  );
}

export default useObjectStore;
