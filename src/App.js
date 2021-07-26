import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  
  handleNameChange = event => {
    console.log(event.currentTarget);
    // this.setState({ name: event.currentTarget.value });
  }
  
  
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              key = { uuidv4() }
            />
            
          </label>
        </form>
        
        <button>Add contact</button>
        <h2>Contacts</h2>
        <ul></ul>
      
      </div>
    );
  }
  
}

export default App;
