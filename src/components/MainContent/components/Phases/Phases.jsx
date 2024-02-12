import { useSelector } from "react-redux";
import { Phase } from "./components/Phase/Phase";
import { PhasesWrapper } from "./PhasesStyles";

export const Phases = () => {
    const phasesData = useSelector((state) => state.phases.phases);

    return (
        <PhasesWrapper>
            {phasesData.map((phase) => (
                <Phase
                    key={phase.id}
                    data={phase}
                />
            ))}
        </PhasesWrapper>
    );
};
