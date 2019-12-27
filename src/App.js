import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ClearInput from "./Components/ClearInput";
import LocalStorageKey from "./Components/LocalStorageKey";
import * as math from "mathjs";

const App = () => {
  const STORAGE_KEY = "math.calculator";

  const [input, setInput] = useState("0");
  const operators = ["+", "-", "*", "/"];

  useEffect(() => {
    console.log("Input", input);
  }, [input]);

  const handleEqual = () => {
    setInput(String(math.evaluate(input)));
  };
  const addToInput = val => {
    if (
      input.charAt(input.length - 1) === "." &&
      (val === "." || operators.includes(val))
    ) {
      setInput(input.replace(/.$/, val));
      return;
    }
    if (input === "0" && !operators.includes(val) && val !== ".") {
      setInput(val);
      return;
    }
    if (
      operators.includes(input.charAt(input.length - 1)) &&
      operators.includes(val)
    ) {
      setInput(input.replace(/.$/, val));
      return;
    }

    setInput(input + val);
  };

  const handleClearInput = () => {
    setInput("0");
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <LocalStorageKey a={input} b={setInput} localName={STORAGE_KEY} />
        <Input input={input} />
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearInput handleClear={handleClearInput}>Clear</ClearInput>
        </div>
      </div>
    </div>
  );
};

export default App;
