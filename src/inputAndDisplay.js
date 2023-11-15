import React, { useState } from "react";
import "./inputAndDisplay.css";

let nextId = 0;

const InputAndDisplay = () => {
  const inputButton = document.querySelector(".main-button");
  const outputDiv = document.querySelector(".main-output");

  const [value, setValue] = useState("");
  const [list, setList] = useState([{ id: 0, cont: "" }]);

  const inputValueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const inputValueBlurHandler = () => {
    if (value === "") {
      return;
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i].cont === value) {
        inputButton.disabled = true;
        outputDiv.style.border = "1px solid red";
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setList([...list, { id: nextId++, cont: value }]);
    const newDiv = document.createElement("div");

    newDiv.innerText = value;
    outputDiv.appendChild(newDiv);
  };

  return (
    <div>
      <form class="main-input" onSubmit={submitHandler}>
        <label class="inputValue">이름 :</label>
        <input
          type="text"
          class="main-input-text"
          name="inputValue"
          value={value}
          onChange={inputValueChangeHandler}
          onBlur={inputValueBlurHandler}
          required
        />
        <button class="main-button" type="submit">
          내용 입력하기!
        </button>
      </form>
      <div class="main-output"></div>
    </div>
  );
};

export default InputAndDisplay;
