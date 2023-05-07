import { useReducer } from "react";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

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
