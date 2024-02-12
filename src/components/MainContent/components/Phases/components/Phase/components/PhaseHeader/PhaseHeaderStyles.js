import styled from "styled-components";
import { blackColor, grayColor, redColor, whiteColor } from "../../../../../../../../assets/styles/variables";

export const PhaseHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem 0 1.56rem;
    background-color: ${({ isactive }) => (isactive ? redColor : grayColor)};
    border-radius: ${({ isactive }) => (isactive ? '0.31rem 0.31rem 0 0' : '0.31rem')};
    cursor: pointer;
`;

export const PhaseTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const PhaseTitle = styled.h2`
    font-weight: 800;
    line-height: 1.37rem;
    color: ${({ isactive }) => (isactive ? whiteColor : blackColor)}
`;

export const PhaseDueDate = styled.p`
    font-weight: ${({ isactive }) => (isactive ? 800 : 300)};
    color: ${({ isactive }) => (isactive ? whiteColor : blackColor)}
`;