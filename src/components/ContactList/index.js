import Contact from 'components/Contact';
import css from '../ContactForm.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.todoList}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
