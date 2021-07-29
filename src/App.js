import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Filter from './components/Filter';


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  contactsId = uuidv4();
 
  formSubmitHandler = (text) => {
    console.log('text:', text)
    const add = { id: this.contactsId, name: text.name, number: text.number };
    this.setState(({ contacts }) => ({
        contacts: [add, ...contacts]
    }))
  }   
  
  render() {
    return (
      <div>
        <h1>Phonebook</h1> 
        <Form onSubmitForm={ this.formSubmitHandler }/>
        
        <h2>Contacts</h2>
        <Filter onChangeFilter={ this.state.filter }/>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={uuidv4()}>{contact.name}: {contact.number}</li>
          ))}
        </ul>      
      </div>
    );
  }  
}

export default App;