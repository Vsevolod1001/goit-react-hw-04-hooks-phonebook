import React, {Component} from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import {ContactLable, ContactFormCard, formDiv, FormBtn } from './ContactForm.styled'

class ContactForm extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
     }
    state = {        
        name: '',
        number: ''
    };
    handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({name: '', number: ''})
    };

    render() {
        return(
            <formDiv>                
                <ContactFormCard            
                onSubmit={this.handleSubmit}>
                    <ContactLable> Name: 
                    <input
                        value={this.state.name}
                        onChange={this.handleChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                />
                    </ContactLable>
                    <ContactLable> Number: 
                    <input
                    value={this.state.number}
                    onChange={this.handleChange}
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
              
            </formDiv>
        );
    }
}

export default ContactForm