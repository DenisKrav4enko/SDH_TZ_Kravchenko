import styled from "styled-components";
import { grayColor, whiteColor } from "../../../../../../assets/styles/variables";

export const PhaseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PhaseContentWrapper = styled.div`
    display: ${({ isActive }) => (isActive ? `flex` : 'none')};
    align-items: center;
    justify-content: space-between;
    padding: ${({ isMobile }) => (isMobile ? '2.5rem 1.25rem' : '2.5rem 6.25rem')};
    background-color: ${whiteColor};
    border: 0.06rem solid ${grayColor};
    border-radius: 0 0 0.32rem 0.32rem;
`;