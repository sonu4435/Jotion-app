import { useEffect, useState } from "react";

export const Useorigin = () => {
  const [isMounted, setMounted] = useState(false);

  const origin =
    typeof window !== "undefined" &&
    (window.location.origin ? window.location.origin : "");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return "";
  }
  return origin;
};
