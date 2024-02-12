import { isMobile } from "react-device-detect";
import { NavbarMenuItemWrapper } from "./NavbarMenuItemStyles";

export const NavbarMenuItem = (item) => {
    return (
        <NavbarMenuItemWrapper isMobile={isMobile}>{item.item}</NavbarMenuItemWrapper>
    )
}