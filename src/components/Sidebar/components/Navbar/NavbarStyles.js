import styled, { css } from 'styled-components';
import { blackColor, grayColor, whiteColor } from '../../../../assets/styles/variables'

export const NavbarWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    ${({ isMobile }) => isMobile && css`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        padding: 5rem 3.75rem;
        background-color: ${grayColor};
    `}
`;

export const NavbarTitle = styled.h3`
    font-size: ${({isMobile}) => (isMobile ? '1.5rem' : '1rem')};
    font-weight: 800;
    text-align: ${({isMobile}) => (isMobile ? 'center' : 'left')};
`;

export const NavbarLevelsWrapper = styled.div`
    width: 100%;
    background-color: ${whiteColor};
    border-radius: 0.31rem 0.31rem 0 0;
    border-bottom: 0.12rem solid ${blackColor}
`;