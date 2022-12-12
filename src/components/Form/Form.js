import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Form extends React.Component {
  state = {
    inputValue: '',
  };

  handleOnSubmit = (event) => {
    const { onSubmitForm } = this.props;
    const { inputValue } = this.state;

    event.preventDefault();
    onSubmitForm(inputValue);

    this.setState({
      inputValue: '',
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.handleOnSubmit} className="form">
        <input
          type="text"
          placeholder="Ajouter une tâche"
          className="form__input"
          value={inputValue}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Form;
