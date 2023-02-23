import css from './Form.module.css'
import { useState } from 'react'
import { Notify } from 'notiflix'


export const Form = ({addContact, contacts}) => {
    
const [name, setName] = useState('')
const [number, setNumber] = useState('')
    
    
function handleChange(event) {
    const { name, value } = event.target
    // this.setState({ [name]: value })    
    switch (name) {
    case "name":
    setName(value)
    break;

    case "number":
    setNumber(value)
    break;

    default:
    break
}
}

function handleSubmit(ev) {
    ev.preventDefault();
    if (
        contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()
        )
    ) {
        return Notify.warning('This contact is already in the list');
    }

    addContact(name, number);
    setName('')
    setNumber('')
}


        return (<>
            <form className={css.Form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    Name
                    <input className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleChange}
                        required />
                </label>
                <label className={css.label}>
                    Number
                    <input className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={handleChange}
                        required/>
                </label>
                <button type="submit" className={css.button}>Add contact</button>
            </form>
        </>
        )

}