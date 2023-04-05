import React, { useState } from "react";
import "./InputShortener.css";

const InputShortener = ({ setInputValue, handleFetchError }: { setInputValue: any;handleFetchError:Function; }) => {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false)
  const handleClick = () => {
    !value && setShowError(true)
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
          onChange={(e) => {
            handleFetchError();
            showError && setShowError(false);
            setValue(e.target.value);
          }}
        />
        <div className="button">
          <button onClick={handleClick}>shorten</button>
        </div>
      </div>
      {showError && (
        <p className="ml-8 text-[0.7rem] text-red-700 mt-2">Please, fill out this field.</p>
      )}
    </div>
  );
};

export default InputShortener;
