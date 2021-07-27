import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  
  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  }
  
  addContact = () => {
    
    const {name } = this.state;
    // console.log(name)
    this.setState((prevState) => {
      // console.log(...prevState.contacts, [name])
      if(name) {
        return {
          contacts: [...prevState.contacts, name]
        }
      }
    })
  }

  // e.preventDefault();
    
  render() {
    const {contacts, name } = this.state;
    return (
      <div>
        <h1>Phonebook</h1> 
        <form>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleNameChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required              
            />            
          </label>
        </form>        
        <button
          onClick={this.addContact}>Add contact</button>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key = { uuidv4() }>{contact}</li>
          ))}
        </ul>      
      </div>
    );
  }
  
}

export default App;
