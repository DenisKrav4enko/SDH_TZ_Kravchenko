import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { ResourcesItem } from "./components/ResourcesItem/ResourcesItem";
import {
    ResourcesWrapper,
    ResourcesTitle,
    ResourcesContent
} from './ResourcesStyles'

export const Resources = () => {
    const initialState = useSelector(state => state.resources.moreResources);

    return (
        <ResourcesWrapper isMobile={isMobile}>
            <ResourcesTitle isMobile={isMobile}>
                More Resources
            </ResourcesTitle>
            <ResourcesContent isMobile={isMobile}>
                {initialState.map(source => (
                    <ResourcesItem
                        key={source.name}
                        data={source}
                    />
                ))}
            </ResourcesContent>
        </ResourcesWrapper>
    )
}