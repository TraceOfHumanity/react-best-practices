import React, {useState} from "react";

import {CalculationWithoutMemo} from "./CalculationWithoutMemo";
import { CalculationWithUseMemo } from "./CalculationWithUseMemo";

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleAddNumber = () => {
    setNumbers([...numbers, Math.random()]);
  };

  return (
    <div>
      <h1>useMemo Example</h1>

      <div className="text-2xl">Counter value: {count}</div>
      <button
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        re-render
      </button>

      <button
        className="rounded-md bg-blue-500 p-2 text-white"
        onClick={handleAddNumber}
      >
        add number
      </button>

      <CalculationWithoutMemo numbers={numbers} />
      <CalculationWithUseMemo numbers={numbers} />
    </div>
  );
};
