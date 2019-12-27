import React, { useEffect } from "react";

const LocalStorageKey = ({ a, b, localName }) => {
  const LOCAL_STORAGE_KEY = localName;
  const storedInputs = localStorage.getItem(LOCAL_STORAGE_KEY);

  useEffect(() => {
    if (storedInputs) {
      b(storedInputs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, a);
  }, [a]);
  return null;
};
export default LocalStorageKey;
