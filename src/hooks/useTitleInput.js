import { useState, useEffect, useDebugValue } from "react";

const useTitleInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    document.title = value;
  });
  useDebugValue(value.length > 0 ? "Full" : "empty");
  return [value, setValue];
};

export { useTitleInput };
