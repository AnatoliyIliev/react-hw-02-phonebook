import styles from './ContactList.module.scss'

const ContactList = ({ contacts, onDeleteContact }) => (
    
    <ul>
        {console.log(contacts)}
        {contacts.map(({id, name, number}) => (
            <li  className={styles.ContactList} key={id}>
                <p className={styles.ContactList_name}>{name}: {number}</p>
                <button onClick={() => onDeleteContact(id)}>Delete</button>            
            </li>            
        ))}
    </ul>
)

export default ContactList;