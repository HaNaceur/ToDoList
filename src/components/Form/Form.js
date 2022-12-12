import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Form extends React.PureComponent {
  state = {
    inputValue: '',
  };

  inputRef = React.createRef();

  componentDidMount() {
    // STOOOOPPPP on ne fais plus ca ! On passe par react
    // const input = document.querySelector('input.form__input');

    console.log(this.inputRef); // inputRef contient une référence vers l'element du DOM de mon input,
    // c'est un objet avec une clé current { current: domElement }
    if (this.inputRef.current) {
      // une bonne pratique consiste à vérifier l'élément existe avant de faire des opérations dessus
      this.inputRef.current.focus();
      // on fait nos opération sur la ref après le 1er rendu, car sinon inputRef.current n'aurait pas de valeur
    }
  }

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
    console.log(this.inputRef);
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.handleOnSubmit} className="form">
        <input
          // autoFocus aurait pu suffir, mais içi on s'entraine
          ref={this.inputRef}
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
