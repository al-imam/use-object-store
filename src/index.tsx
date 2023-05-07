import { useReducer } from "react";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

function useObjectStore<StoreType extends object>(
  init: StoreType
): [StoreType, React.Dispatch<AtLeastOne<StoreType>>] {
  return useReducer(
    (prev: StoreType, next: AtLeastOne<StoreType>): StoreType => ({
      ...prev,
      ...next,
    }),
    init
  );
}

export default useObjectStore;
