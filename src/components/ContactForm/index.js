import { useState } from 'react';
import css from '../ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    e.target.reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.nameInputContainer}>
        <label htmlFor="exampleInputTitle" className={css.label}>
          Name
        </label>
        <input
          className={css.input}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
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
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </div>
      <button type="submit" className={css.btnCreate}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
