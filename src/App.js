import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  nameId = uuidv4();

  // addObject = (text) => {
  //   console.log(text)
  //   const add = {id: this.nameId, name: text };    
    
  //   this.setState(({ contacts }) => ({
  //       contacts: [add, ...contacts]
  //   }))
  // }
  
  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ name: value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();    
    // const { name } = this.state;
    // console.log(name)
    // this.setState(this.addObject(name))
    const add = { id: uuidv4(), name: this.state.name, };
    
    this.setState((prevState) => ({
      contacts: [add, ...prevState.contacts],
    }));
    // this.reset() 
  }

  reset = () => {
    this.setState({name: ''})
  } 
    
  render() {
    const {contacts, name } = this.state;
    return (
      <div>
        <h1>Phonebook</h1> 
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            Name
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              id={this.nameId}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required              
            />            
          </label>
          <button tupe='submit'>Add contact</button>
        </form>        
        
        <h2>Contacts</h2>
        <ul>
          {/* {contacts} */}
          {contacts.map((contact) => (
            <li key = { uuidv4() }>{contact}</li>
          ))}
        </ul>      
      </div>
    );
  }
  
}

export default App;
