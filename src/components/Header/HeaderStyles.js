import styled, { css } from 'styled-components';
import { redColor } from "../../assets/styles/variables";

export const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    padding: 1.5625rem 1.875rem;
    box-sizing: border-box;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({isBurgerOpen}) => (isBurgerOpen ? 'flex-end' : 'space-between')};
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const BurgerMenuIcon = styled.div`
    position: relative;
    width: 1.4375rem;
    height: 0.125rem;
    background-color: ${redColor};
    cursor: pointer;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${redColor};
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &::before {
        top: -0.5rem;
        left: 0;
        opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    &::after {
        top: 0.5rem;
        left: 0;
    }

    ${({ isOpen }) => isOpen && css`
        &::after {
            transform: translateY(-0.5rem) rotate(-90deg);
        }

      & {
          transform: translateY(0.5rem) rotate(-45deg)
      }
    `}
`;