import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Form({ onSubmitForm }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitForm(inputValue);

    setInputValue('');
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input
          // autoFocus aurait pu suffir, mais içi on s'entraine
        ref={inputRef}
        type="text"
        placeholder="Ajouter une tâche"
        className="form__input"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
}

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Form;
