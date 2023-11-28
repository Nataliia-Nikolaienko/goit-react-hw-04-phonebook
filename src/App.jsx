import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import css from './components/ContactForm.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('my-contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const nameContact = contacts.find(contact => contact.name === name);
    const numberContact = contacts.find(contact => contact.number === number);
    if (nameContact) {
      return alert(`${name} is already in contacts.`);
    } else if (numberContact) {
      return alert(`${number} is already in contacts.`);
    } else {
      setContacts(prevContacts => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return [...prevContacts, newContact];
      });
    }
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    window.localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className={css.formWrapper}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm addContact={addContact} />
      </div>

      <div className={css.contactsWrapper}>
        <h2 className={css.contactsTitle}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default App;
