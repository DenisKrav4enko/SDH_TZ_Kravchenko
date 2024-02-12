import styled, { css } from "styled-components";
import {
    blackColor,
    darkGrayColor,
    grayColor,
    lightGrayColor,
    redColor
} from "../../../../../assets/styles/variables";

export const NavbarLevelWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0.62rem;
`;

export const NavbarLevelIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${grayColor};
    padding: 0.19rem;
    width: ${({isMobile}) => (isMobile ? '1.25rem' : '0.94rem')};
    height: ${({isMobile}) => (isMobile ? '1.25rem' : '0.94rem')};
    box-sizing: border-box;
    margin-right: 0.31rem;

    svg {
        fill: ${({ is_selected }) => (is_selected ? 'red' : 'defaultColor')};
    }

    ${props => !props.is_last && css`
        &::after {
            content: '';
            position: absolute;
            width: 0.12rem;
            height: 0.75rem;
            background-color: ${lightGrayColor};
            top: 150%;
            left: 47%;
            transform: translateY(-50%);
        }
    `}
`;

export const NavbarLevelItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2.5rem;
    padding: 0 0.31rem;
    width: 100%;
    box-sizing: border-box;
    border-bottom: ${({ isLast }) => (isLast ? 'none' : `0.06rem solid ${lightGrayColor}`)};
    cursor: pointer;
    font-size: ${({isMobile}) => (isMobile ? '1rem' : '0.88rem')};
    font-weight: ${({ isSelected }) => (isSelected ? 800 : 300)};
    font-style: ${({ level }) => (level !== 'Unassigned' ? 'normal' : 'italic')};
    color: ${({ isSelected }) => (isSelected ? redColor : blackColor)};
    user-select: none;
    

    &:hover {
        border-radius: 0.19rem;
        background: ${grayColor};
        border-bottom: ${({ isLast }) => (isLast ? 'none' : `0.06rem solid ${grayColor}`)};
    }
`;

export const InnerCircle = styled.div`
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: ${({ is_selected }) => is_selected ? redColor : darkGrayColor}
`;