import React, { useState } from "react";
import "./InputShortener.css";

const InputShortener = ({ setInputValue }: { setInputValue: any }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }
  return (
    <div className="input-wrapper">
      <h1>URL Shortener</h1>
      <div className="input-container">
        <input 
        type="text" 
        placeholder="Paste a link to shorten it" 
        value={value}
        onChange={e => setValue(e.target.value)} />
        <div className="button">
          <button onClick = {handleClick}>shorten</button>
        </div>
      </div>
    </div>
  );
};

export default InputShortener;
