import React, { useState } from 'react';

export default function Todolist(props) {
  const [inputText, setInputText] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      if (inputText.trim() !== '') {
        props.addList(inputText);
        setInputText('');
      }
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add Item"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />
        <button
          className="button"
          onClick={() => {
            if (inputText.trim() !== '') {
              props.addList(inputText);
              setInputText('');
            }
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
