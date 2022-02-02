import styled from "styled-components";

export const ContactLable = styled.label`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
`;
export const ContactFormCard = styled.form`
    border: 8px solid tomato;
    width: 330px;
    height: 200px;
    text-align: center;
    padding-top: 30px;
`;

export const FormDiv = styled.div` 
    margin-bottom: 20px;
`;
export const FormBtn = styled.button`
    margin-top: 40px;
    height: 40px;
    &:hover{
        background-color: burlywood;
    }
`;



