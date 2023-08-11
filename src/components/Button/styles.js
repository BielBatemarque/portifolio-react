import styled from 'styled-components';

export const ColorButton = styled.button`
    padding: 15px;
    color: #FFF;
    border:none;
    cursor: pointer;
    background-color: ${props => props.color || 'blue'};
    border-radius: 10px;
    margin: 10px;
    font-size: 1.2rem;
`;