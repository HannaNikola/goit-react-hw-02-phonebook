
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';


export class App extends Component  {
  
  state = {
    contacts: [],
    name: '',
    number: '',
  }
  
  
  addContactform = newContact => {
    console.log(newContact)
    this.setState((prevState) => ({ contacts: [...prevState.contacts, { ...newContact ,id:nanoid()}]}))
  }


  render() {
    return (
      <>
         <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContactform} />
          <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </ >
        )
  }
  
  
};



// const newContact = { id: nanoid(), name };
// this.setState((prevState) => ({
//   contacts: [...prevState.contacts, newContact],
//   name: '',
// }));
 