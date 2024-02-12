import styled from "styled-components";
import {grayColor} from "../../assets/styles/variables";

export const MainWrapper = styled.div`
    width: ${({ isMobile }) => (isMobile ? '100%' : 'calc(100vw - 16.25rem)')};
    box-sizing: border-box;
    padding: ${({ isMobile }) => (isMobile ? '5.63rem 1.25rem' : '5.625rem 0 3.13rem 0')};
`;

export const MainContainer = styled.div`
    max-width: 51.9rem;
    width: 100%;
    margin: 0 auto;
`;

export const MainTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
`;

export const MainTitle = styled.h1`
    font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : '2.25rem')};
    font-weight: 800;
    line-height: ${({ isMobile }) => (isMobile ? '2.06rem' : '3.06rem')};
`;

export const CircleButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${grayColor};
    padding: 0.44rem 0.63rem;
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    &:first-child {
        transform: rotate(180deg);
    }
`;