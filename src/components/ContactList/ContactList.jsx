import React from "react";
import Contact from "../Contact/Contact";
import {ContactUl} from './ContactList.styled'
import PropTypes from "prop-types";

const ContactList = ({contacts, onDeleteContact}) => (
    <div>        
        {contacts.map(({id, name, number}) => (
            <ContactUl key={id}>
                <Contact 
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />   
            </ContactUl>
        ))}
    </div>
)
ContactList.propTypes= {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired
};
export default ContactList;