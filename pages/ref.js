import React, { useRef} from "react";

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    console.log(inputEl);
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
