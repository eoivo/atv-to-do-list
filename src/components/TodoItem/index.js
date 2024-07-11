import React, { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import "./style.css";

function TodoItem({ onAddTask }) {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState("");
  const inputRef = useRef(null); 

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    onAddTask(value);
    erase();
  };

  const keyPressed = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    }
    if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div>
      <input
        ref={inputRef} 
        className="new-todo"
        placeholder="Adicionar nova tarefa..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={keyPressed}
      />
      {}
    </div>
  );
}

TodoItem.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TodoItem;