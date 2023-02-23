import { useEffect, useState } from "react";
import { Form } from "./Form/Form";
import { nanoid } from "nanoid";
import { ContactsList } from 'components/Contacts/ContactsList'
import { Filter } from "./Filter/Filter";

export const App = () =>{

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? [])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts, filter])
  
  function addContact(name, number) {
    setContacts(prevState => {
      return [...prevState, {id: nanoid(), name, number}]
    })
  }

  function handleFilter(ev) {
    const { value } = ev.target;
    setFilter(value)
    
  };

  const showFilteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  
  function OnClickDelete(id) {
    setContacts(prevState => {
      return (prevState.filter(contact => contact.id !== id))
    });
  };

  
    return (
      <>
        <h1>Phonebook</h1>
        <Form addContact={addContact} contacts={contacts}></Form>

        <h2>Contacts</h2>
        <Filter
          handleFilter={handleFilter}
          filter={filter}
        />
        <ContactsList
          showFilteredContacts={showFilteredContacts}
          OnClickDelete={OnClickDelete}
        />
    </>
    )
    
  }

