import React from 'react';
import css from '../ContactForm.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <label className={css.label}>Find contacts by name</label>
    <input
      className={css.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </>
);

export default Filter;
