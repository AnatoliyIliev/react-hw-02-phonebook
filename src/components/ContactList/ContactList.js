import ElementContactList from '../ElementContactList'
import styles from './ContactList.module.scss'

const ContactList = ({ contacts, onDeleteContact }) => (    
    <ul className={styles.contactList}>
        {contacts.map(({id, name, number}) => (
            <li  className={styles.contactList_items} key={id}>
                <ElementContactList
                    name={name}
                    number={number}
                    onDeleteContact={()=>onDeleteContact(id)} />
            </li>            
        ))}
    </ul>
)

export default ContactList;