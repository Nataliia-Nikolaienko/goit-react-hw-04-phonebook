import css from '../ContactForm.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css.contactListItem}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.telefon}>{contact.number}</p>
      <button
        onClick={() => deleteContact(contact.id)}
        className={css.btnDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
