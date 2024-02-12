import styled from "styled-components";
import {mediumGrayColor} from "../../../../../assets/styles/variables";

export const NavbarMenuItemWrapper = styled.div`
    width: 100%;
    padding: 0.94rem 0;
    border-bottom: 0.06rem solid ${mediumGrayColor};
    cursor: pointer;
    font-size: ${({isMobile}) => (isMobile ? '1.5rem' : '1rem')};
    text-align: ${({isMobile}) => (isMobile ? 'center' : 'left')};
    user-select: none;
`;