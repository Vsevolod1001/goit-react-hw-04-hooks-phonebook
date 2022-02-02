import {useState, useEffect} from "react";
import shortid from "shortid";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from './Filter'

export default function App () {
  
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');
 
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    setContacts(parsedContacts)

  }, []);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  
  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId),
    );
  };
  const addContact = ({name, number}) => {
    
    const newCard = {id: shortid.generate(), name, number}
    const searchCard = contacts.find(contact => contact.name === newCard.name)
    if (searchCard) {
      alert(`${name} is already in the contacts`);
      return;
    } else {
      setContacts([newCard, ...contacts])
    }

  }
  const chandeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter)
    )
    return (
      <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact}/>
            <h2>Contacts</h2>
            <Filter value={filter} 
            onChange={chandeFilter}/>
            <ContactList 
             contacts={visibleContacts}
             onDeleteContact={deleteContact}
             />
      </div>
    )
  
}

