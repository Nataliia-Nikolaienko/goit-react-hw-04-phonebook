import { Component } from 'react';
import css from '../ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
    e.target.reset();
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <div className={css.nameInputContainer}>
          <label htmlFor="exampleInputTitle" className={css.label}>
            Name
          </label>
          <input
            className={css.input}
            name="name"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </div>
        <div className={css.telWrapper}>
          <label htmlFor="exampleInputTel" className={css.label}>
            Number
          </label>
          <input
            className={css.input}
            name="number"
            type="tel"
            id="exampleInputTel"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </div>
        <button type="submit" className={css.btnCreate}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
