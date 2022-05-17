import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    font-family: monospace;
    color: ${({ theme }) => theme.color.grey};
`;