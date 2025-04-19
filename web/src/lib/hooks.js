import { useEffect, useState } from "react";
import { initApartments } from "./util";

export function useSoldApartments() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    initApartments(() => setCount(count + 1));
  }, []);

  return [count, setCount];
}
