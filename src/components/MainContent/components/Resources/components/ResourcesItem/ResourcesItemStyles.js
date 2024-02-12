import styled from "styled-components";
import { darkGrayColor } from "../../../../../../assets/styles/variables";

export const ResourcesItemWrapper = styled.div`
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? 'column-reverse' : 'row')};
    align-items: center;
    justify-content: flex-start;
    gap: ${({ isMobile }) => (isMobile ? '0.93rem' : '1.25rem')};
    width: 100%;
    height: fit-content;
    cursor: pointer;
`;

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
    gap: ${({ isMobile }) => (isMobile ? '0.31rem' : '1.25rem')};
`;

export const ResourcesItemTitle = styled.p`
    font-size: ${({ isMobile }) => (isMobile ? '0.87rem' : '1rem')};
    font-weight: 300;
`;
export const ResourcesItemText = styled.p`
    font-size: ${({ isMobile }) => (isMobile ? '0.87rem' : '1rem')};
    font-weight: 300;
    color: ${darkGrayColor};
`;