import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingImage = styled.img`
  animation: ${rotateAnimation} 14s linear infinite;
`;

export const Section = styled.div`
    display: flex;
    margin-top: 2rem;
    justify-content: space-evenly;
`;

