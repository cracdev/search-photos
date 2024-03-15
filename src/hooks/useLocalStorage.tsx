import * as React from "react";

type CallbackFn = () => void;

const dispatchStorageEvent = (key:string, newValue:string | null) => {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const setItem = (key:string, value:any) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeItem = (key:string) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getItem = (key:string) => {
  return window.localStorage.getItem(key);
};

const subscribe = (callback:CallbackFn) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getServerSnapshot = () => {
  throw Error("useLocalStorage is a client-only hook");
};

export default function useLocalStorage(key:string, initialValue:null) {
  const getSnapshot = () => getItem(key);

  const store = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setState = React.useCallback(
    (value:CallbackFn | string) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const nextState = typeof value === "function" ? value(JSON.parse(store)) : value;

        if (nextState === undefined || nextState === null) {
          removeItem(key);
        } else {
          setItem(key, nextState);
        }
      } catch (e) {
        console.warn(e);
      }
    },
    [key, store]
  );

  React.useEffect(() => {
    if (getItem(key) === null && typeof initialValue !== "undefined") {
      setItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
}