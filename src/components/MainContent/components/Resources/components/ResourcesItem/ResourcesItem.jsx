import { isMobile } from "react-device-detect";
import { FramedArrowIcon } from "../../../../../../assets/img";
import {
    ResourcesItemWrapper,
    TextWrapper,
    ResourcesItemTitle,
    ResourcesItemText
} from "./ResourcesItemStyles";

export const ResourcesItem = (data) => {
    const {
        name,
        source,
        time
    } = data.data

    return (
        <ResourcesItemWrapper isMobile={isMobile}>
            <FramedArrowIcon/>
            <TextWrapper isMobile={isMobile}>
                <ResourcesItemTitle isMobile={isMobile}>{name}</ResourcesItemTitle>
                <ResourcesItemText isMobile={isMobile}>{source} {time ?? ''}</ResourcesItemText>
            </TextWrapper>
        </ResourcesItemWrapper>
    )
}