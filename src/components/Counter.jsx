import { useEffect, useState } from "react";

export default function Counter({ value, duration = 1200 }) {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(numericValue / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        start = numericValue;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <strong>
      {count}
      {suffix}
    </strong>
  );
}
