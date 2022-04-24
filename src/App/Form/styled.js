import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-49%, -49%);
    background: rgba(255, 255, 255, 0.935);
    border-radius: 25px;
    font-size: 20px;
    text-align: center;
    width: 100%;
    max-width: 600px;

    @media (max-width: 767px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-49%, -49%);
        background-color: rgba(255, 255, 255, 0.935);
        border-radius: 25px;
        font-size: 16px;
        text-align: center;
        width: 100%;
        max-width: 300px;
    }
`;

export const Fieldset = styled.fieldset`
    padding: 10px;
    margin: 10px 0;
    border: none;
`;

export const Legend = styled.legend`
    display: inline-block;
    padding: 10px;
    align-items: center;
    max-width: 300px;
    width: 100%;
    font-weight: bold;
    font-size: 140%;
    margin: 0;
`;


export const Title = styled.p`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    padding: 10px;
    border-bottom: 1px solid rgb(255, 255, 255);
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 200px;
    background: white;

    &:hover {
        background: rgb(246, 246, 246);
    }
`;

export const Button = styled.button`
    width: 100%;
    max-width: 200px;
    border: none;
    padding: 10px;
    margin: 5px;
    background: hsl(0, 0%, 0%);
    color:rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);

    &:hover {
        background: hsl(0, 0%, 11%);
    }

    &:active {
        background: hsl(0, 0%, 0%);
    }

    ${({ reset }) => reset && css`
        background: hsl(0, 0%, 100%);
        color:rgb(110, 110, 110);

        &:hover {
            background: hsl(0, 0%, 96%);
        }

        &:active {
            background: hsl(0, 0%, 100%);
        }
    ` }
`;

export const Footer = styled.p`
    margin: 15px;
    font-size: 15px;

    @media (max-width: 767px) {
        margin: 15px;
        font-size: 13px;
    }
`;