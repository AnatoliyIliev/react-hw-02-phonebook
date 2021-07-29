const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
        {contacts.map(({id, name, number}) => (
            <li key={id}>
                <p>{name}: {number}</p>                
                <button onClick={() => onDeleteContact(id)}>Удалить</button>            
            </li>            
        ))}
    </ul>
)

export default ContactList;



// const TodoList = ({ todos, onDeleteTodo }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text }) => (
//       <li key={id} className="TodoList__item">
//         <p className="TodoList__text">{text}</p>
//         <button onClick={() => onDeleteTodo(id)}>Удалить</button>
//       </li>
//     ))}
//   </ul>
// );