import {useState} from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import {ContactLable, ContactFormCard, FormDiv, FormBtn } from './ContactForm.styled'

export default function ContactForm ({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = e => {
            setName(e.currentTarget.value);
    };
    const handleChangeNumber = e => {        
            setNumber(e.currentTarget.value);
    };


    const handleSubmit = e => {
        e.preventDefault(); 
        onSubmit({name, number})       
        setName('');
        setNumber('');
    };
        return(
            <FormDiv>                
                <ContactFormCard            
                onSubmit={handleSubmit}>
                    <ContactLable> Name: 
                    <input
                        value={name}
                        onChange={handleChangeName}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                />
                    </ContactLable>
                    <ContactLable> Number: 
                    <input
                    value={number}
                    onChange={handleChangeNumber}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                    </ContactLable>
                <FormBtn                 
                    type="submit"
                    >
                    add contact
                </FormBtn>
                </ContactFormCard>
              
            </FormDiv>
        );
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
 }



   