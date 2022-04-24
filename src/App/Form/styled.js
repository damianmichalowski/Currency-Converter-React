import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-49%, -49%);
    background: ${({ theme }) => theme.color.whiteTransparent};
    border-radius: 25px;
    font-size: 20px;
    text-align: center;
    width: 100%;
    max-width: 600px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;        
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
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 200px;
    background: ${({ theme }) => theme.color.white};

    &:hover {
        filter: brightness(97%);
    }
`;

export const Button = styled.button`
    width: 100%;
    max-width: 200px;
    border: none;
    padding: 10px;
    margin: 5px;
    background: ${({ theme }) => theme.color.black};
    color:${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.black};

    &:hover {
        background: hsl(0, 0%, 10%);
    }

    &:active {
        background: hsl(0, 0%, 0%);
    }

    ${({ reset }) => reset && css`
        background: ${({ theme }) => theme.color.white};
        color:${({ theme }) => theme.color.grey};

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