import React from "react";

import {CounterWithHeavyCalculations} from "./CounterWithHeavyCalculations";
import {SimpleCounter} from "./SimpleCounter";

export const UseMemoExample = () => {
  return (
    <div>
      <SimpleCounter />
      <CounterWithHeavyCalculations />
    </div>
  );
};
