import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import css from './components/ContactForm.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ newContact, name, number }) => {
    const contactObj = {
      ...newContact,
      id: nanoid(),
      name,
      number,
    };
    const nameContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (nameContact) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('my contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('my contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
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
          <ContactForm addContact={this.addContact} />
        </div>

        <div className={css.contactsWrapper}>
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;

// const isExist = contacts.map(contact => contact.name);
//     if (isExist === name) {
//       return alert(`${name} is already in contacts.`);
//     }
