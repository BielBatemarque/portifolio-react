import styled from 'styled-components';

export const ColorButton = styled.button`
    padding: 15px;
    color: #FFF;
    border:none;
    cursor: pointer;
    background-color: ${props => props.color || 'blue'};
`;