import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { PhaseHeader } from "./components/PhaseHeader/PhaseHeader";
import { PhaseContentItem } from "./components/PhaseContent/PhaseContentItem";
import { PhaseWrapper, PhaseContentWrapper } from "./PhaseStyles";

export const Phase = ({ data }) => {
    const { id, title, dueDate, steps } = data;
    const selectedItemId = useSelector((state) => state.phases.selectedItemId);
    const isActive = selectedItemId === id;

    return (
        <PhaseWrapper isactive={isActive}>
            <PhaseHeader
                id={id}
                title={title}
                dueDate={dueDate}
            />

            <PhaseContentWrapper
                isActive={isActive}
                isMobile={isMobile}
            >
                {isActive && (
                    Object.entries(steps).map(([stepKey, step]) => (
                        <PhaseContentItem key={stepKey} step={step}/>
                    ))
                )}
            </PhaseContentWrapper>
        </PhaseWrapper>
    );
};
