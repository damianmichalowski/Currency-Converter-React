import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.color.whiteTransparent};
    width: 100%;
    max-width: 800px;
    padding: 20px;
    border-radius: 20px;
`;