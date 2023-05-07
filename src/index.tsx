import { useReducer } from "react";

function useObjectStore(init: object) {
  return useReducer(
    (prev: object, next: object) => ({
      ...prev,
      ...next,
    }),
    init
  );
}

export default useObjectStore;
