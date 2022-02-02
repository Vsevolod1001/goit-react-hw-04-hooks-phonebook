import React from "react";
import {ContactLi, ContactBtn } from './Contact.styled'
const Contact = ({name, number, id, onDeleteContact}) => {
    return (
        <>
             <ContactLi>                        
                <p>{name}:</p>
            </ContactLi>
            <li>                        
                <p>{number}</p>
            </li>
            
            <ContactBtn 
                onClick={()=> onDeleteContact(id)}
                >delete
            </ContactBtn>
        </>
    )
}
export default Contact