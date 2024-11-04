import React, {useMemo} from "react";

export const CalculationWithUseMemo = ({numbers}: {numbers: number[]}) => {
  const sum = useMemo(() => {
    console.log("Calculating sum with useMemo");
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);
  return <div>Sum: {sum}</div>;
};
