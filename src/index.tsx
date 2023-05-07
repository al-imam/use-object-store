import { useReducer, Dispatch } from "react";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

function useObjectStore<StoreType extends object>(
  initialState: StoreType
): [StoreType, Dispatch<AtLeastOne<StoreType>>] {
  return useReducer(
    (prev: StoreType, next: AtLeastOne<StoreType>): StoreType => ({
      ...prev,
      ...next,
    }),
    initialState
  );
}

export default useObjectStore;
