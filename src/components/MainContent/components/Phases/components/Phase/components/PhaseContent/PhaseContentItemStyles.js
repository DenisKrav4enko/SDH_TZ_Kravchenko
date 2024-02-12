import styled from "styled-components";
import { darkGrayColor, grayColor, redColor } from "../../../../../../../../assets/styles/variables";

export const PhaseContentItemWrapper = styled.div`
    display: flex;
`;

export const PhaseContentIcon = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    background-color: ${grayColor};
`;

export const PhaseContentText = styled.p`
    font-size: 0.87rem;
    font-weight: 300;
    margin: 0.94rem 0 0 0;
`;

export const PhaseContentStatus = styled.p`
    font-size: 0.87rem;
    line-height: 1.19rem;
    font-weight: ${({ isUnlocked }) => (isUnlocked ? 800 : 300)};
    font-style: ${({ isUnlocked }) => (isUnlocked ? 'normal' : 'italic')};
    color: ${({ isUnlocked }) => (isUnlocked ? redColor : darkGrayColor)};
    border-bottom: ${({ isUnlocked }) => (isUnlocked ? `0.13rem solid ${redColor}` : 'none')};
    display: inline;
`;