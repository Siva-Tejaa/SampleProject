import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  counterDecrement,
  counterIncrement,
  incbyValue,
} from "../Redux/CounterSlice";

const Counter = () => {
  const [tyval, settyVal] = useState(0);

  const value = useSelector((state) => state.counter.counterValue);

  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch(counterIncrement());
  };

  const decHandler = () => {
    dispatch(counterDecrement());
  };

  const incByvalue = (tyval) => {
    dispatch(incbyValue(parseInt(tyval)));
    settyVal(0);
  };

  return (
    <div>
      <input
        type="number"
        value={tyval}
        onChange={(e) => settyVal(e.target.value)}
      />
      <br />
      <h3>{value}</h3>
      <br />
      <button onClick={() => incHandler()}>Increment</button> &nbsp;
      <button onClick={() => decHandler()}>Decrement</button>
      <br />
      <br />
      <button onClick={() => incByvalue(tyval)}>
        Increment by Given Value
      </button>
    </div>
  );
};

export default Counter;
