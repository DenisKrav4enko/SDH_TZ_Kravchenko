import styled from "styled-components";
import {grayColor} from "../../../../assets/styles/variables";

export const ResourcesWrapper = styled.div`
    margin-top: ${({ isMobile }) => (isMobile ? '1.88rem' : '4.38rem')};
`;

export const ResourcesTitle = styled.h2`
    font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
    font-weight: 800;
    line-height: ${({ isMobile }) => (isMobile ? '1.37rem' : '2rem')};
`;

export const ResourcesContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.94rem;
    background-color: ${({ isMobile }) => (isMobile ? grayColor : 'none')};
    padding: ${({ isMobile }) => (isMobile ? '1.87rem 0' : 'none')};
    border-radius: ${({ isMobile }) => (isMobile ? '0.62rem' : 'none')};
`;