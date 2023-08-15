import styled from 'styled-components';

export const Header = styled.header`
    height: 4rem;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    text-decoration: none;
    border-bottom: solid 0.5px white;
    line-height: 3.4rem;
`;


export const HeaderReduzido = styled.div`
    width:85%;
    display:flex;
    justify-content: space-evenly;
`;

export const StyledLink = styled.a`
    cursor:pointer;
    color: #FFF;
    text-decoration: none;
    position: relative;
    
    &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #FFF;
        transition: width 0.3s ease;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;