import { setSelectedLevel } from "../../../../../redux/slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { DoneIcon, LockIcon } from "../../../../../assets/img";
import { InnerCircle, NavbarLevelWrapper, NavbarLevelIcon, NavbarLevelItem } from "./NavbarLevelStyles";

export const NavbarLevel = (props) => {
    const dispatch = useDispatch();
    const initialState = useSelector((state) => state.sidebar);
    const {
        levels,
        selectedLevel,
    } = initialState
    const {
        index,
        level,
    } = props

    const handleOnLevelClick = (index) => {
        dispatch(setSelectedLevel(index))
    }

    return (
        <NavbarLevelWrapper>
            <NavbarLevelIcon
                is_selected={selectedLevel === index}
                is_last={index === levels.length - 1}
                isMobile={isMobile}
            >
                {level.isLocked
                    ? <LockIcon/>
                    : level.completed
                        ? <DoneIcon />
                        : <InnerCircle is_selected={selectedLevel === index}/>
                }
            </NavbarLevelIcon>
            <NavbarLevelItem
                isLast={index === levels.length - 1}
                isSelected={selectedLevel === index}
                level={level.name}
                onClick={() => handleOnLevelClick(index)}
                completed={level.completed}
                isMobile={isMobile}
            >
                <b>{index + 1}:</b>{level.name}
            </NavbarLevelItem>
        </NavbarLevelWrapper>
    )
}