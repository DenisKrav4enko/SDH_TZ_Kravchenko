import { isMobile } from 'react-device-detect';
import { Logo, UserIcon } from "../../assets/img";
import { HeaderWrapper, HeaderContent, IconWrapper, BurgerMenuIcon } from './HeaderStyles';

export const Header = (props) => {
    const {
        isBurgerOpen,
        setIsBurgerOpen
    } = props


    const handleToggleMenu = () => {
        setIsBurgerOpen(prevState => !prevState);
    };

    return (
        <HeaderWrapper>
            <HeaderContent isBurgerOpen={isBurgerOpen}>
                {!isBurgerOpen &&
                    <IconWrapper>
                        <Logo/>
                    </IconWrapper>
                }

                <IconWrapper>
                    {isMobile
                        ? <BurgerMenuIcon isOpen={isBurgerOpen} onClick={handleToggleMenu}/>
                        : <UserIcon/>
                    }
                </IconWrapper>
            </HeaderContent>
        </HeaderWrapper>
    )
};