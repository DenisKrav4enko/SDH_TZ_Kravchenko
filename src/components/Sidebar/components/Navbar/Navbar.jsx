import {  useSelector } from "react-redux";
import { isMobile } from "react-device-detect";
import { NavbarLevel } from "./NavbarLevel/NavbarLevel";
import { NavbarMenuItem } from "./NavbarMenuItem/NavbarMenuItem";
import { UserMobIcon } from "../../../../assets/img";
import {
    NavbarTitle,
    NavbarWrapper,
    NavbarLevelsWrapper,
} from './NavbarStyles';

export const Navbar = () => {
    const initialState = useSelector(state => state.sidebar);
    const {
        title,
        levels,
        navigationItems
    } = initialState

    return(
        <NavbarWrapper isMobile={isMobile}>
            {isMobile && <UserMobIcon/>}
            <NavbarTitle isMobile={isMobile}>{title}</NavbarTitle>

            <NavbarLevelsWrapper>
                {levels.map((level, index) => (
                    <NavbarLevel
                        index={index}
                        level={level}
                    />
                ))}
            </NavbarLevelsWrapper>

            {navigationItems.map((item, index) => (
                <NavbarMenuItem key={index} item={item}/>
            ))}
        </NavbarWrapper>
    )
}