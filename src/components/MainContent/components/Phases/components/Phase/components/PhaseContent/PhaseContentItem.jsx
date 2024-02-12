import {
    PhaseContentItemWrapper,
    PhaseContentIcon,
    PhaseContentText,
    PhaseContentStatus
} from "./PhaseContentItemStyles";

export const PhaseContentItem = (step) => {

    return (
        <PhaseContentItemWrapper>
            <div>
            <PhaseContentIcon><step.step.icon/></PhaseContentIcon>
            <PhaseContentText>{step.step.actionText}</PhaseContentText>
            <PhaseContentStatus isUnlocked={step.step.isUnlocked}>{step.step.status}</PhaseContentStatus>
            </div>
        </PhaseContentItemWrapper>
    )
}