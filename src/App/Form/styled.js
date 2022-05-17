import styled from "styled-components";

export const StyledForm = styled.form`

    /* @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {      
        
    } */
`;

export const Fieldset = styled.fieldset`
   border-radius: 5px;
   border: none;
   padding: 0;
`;

export const Legend = styled.legend`
   margin: auto;
   font-size: 200%;
   font-weight: 700;
   padding: 20px;
`;

export const Container = styled.p`

`;

export const Label = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Title = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 150px;
    margin-right: 20px;
    padding: 10px;
    padding-left: 0;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    flex-grow: 1;

    background: ${({ theme }) => theme.color.white};

    &:hover {
        filter: brightness(97%);
    }
`;

export const Button = styled.button`

    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.coffe};
    color: ${({ theme }) => theme.color.white};

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(130%);
    }
`;

export const Footer = styled.p`
    color: ${({ theme }) => theme.color.grey};
    text-align: center;

    /* @media (max-width: 767px) {
        
    } */
`;