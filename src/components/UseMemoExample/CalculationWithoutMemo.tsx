import React from "react";

export const CalculationWithoutMemo = ({numbers}: {numbers: number[]}) => {
  const sum = () => {
    console.log("Calculating sum without useMemo");
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };
  return <div>Sum: {sum()}</div>;
};
