import s from './ContactList.module.css';

export default function ContactsRender({ contactsList, onDelete }) {
  return (
      <ul className={s.contactInfo}>
        {contactsList &&
          contactsList.map(({ id, name, number }) => (
            <li className={s.info} key={id}>
              <span className={s.contact}>
                {name} - {number}
              </span>
              <button ype="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
  );
}
