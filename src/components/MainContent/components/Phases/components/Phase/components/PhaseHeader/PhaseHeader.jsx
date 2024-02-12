import { BrowserView, MobileView } from "react-device-detect";
import { useSelector } from "react-redux";
import { LockIcon } from "../../../../../../../../assets/img";
import {
    PhaseHeaderWrapper,
    PhaseTitleWrapper,
    PhaseTitle,
    PhaseDueDate
} from './PhaseHeaderStyles'

export const PhaseHeader = (props) => {
    const {
        id,
        title,
        dueDate
    } = props;
    const selectedItemId = useSelector((state) => state.phases.selectedItemId);
    const isActive = selectedItemId === id;

    return (
        <PhaseHeaderWrapper isactive={isActive}>
            <PhaseTitleWrapper>
                {!isActive && <LockIcon />}
                <PhaseTitle
                    isactive={isActive}
                >
                    <MobileView>
                        {title.split(":")[0].trim()}
                    </MobileView>

                    <BrowserView>
                        {title}
                    </BrowserView>
                </PhaseTitle>
            </PhaseTitleWrapper>

            <PhaseDueDate isactive={isActive}>{dueDate}</PhaseDueDate>
        </PhaseHeaderWrapper>
    )
}