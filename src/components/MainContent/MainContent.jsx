import { useDispatch, useSelector } from "react-redux";
import { setSelectedItemId } from "../../redux/slices/phasesSlice";
import { isMobile } from "react-device-detect";
import { Phases } from "./components/Phases/Phases";
import { Resources } from "./components/Resources/Resources";
import { SimpleArrowIcon } from "../../assets/img";
import { MainWrapper, MainContainer, MainTitleWrapper, MainTitle, CircleButton } from "./MainContentStyles";

export const MainContent = () => {
    const dispatch = useDispatch();
    const phasesData = useSelector((state) => state.phases.phases);
    const selectedItemId = useSelector((state) => state.phases.selectedItemId);
    const currentIndex = phasesData.findIndex((phase) => phase.id === selectedItemId);

    const handleNextClick = () => {
        const nextIndex = currentIndex + 1;

        nextIndex < phasesData.length && dispatch(setSelectedItemId(phasesData[nextIndex].id));
    };

    const handlePrevClick = () => {
        const prevIndex = currentIndex - 1;

        prevIndex >= 0 && dispatch(setSelectedItemId(phasesData[prevIndex].id));
    };

    return (
        <MainWrapper isMobile={isMobile}>
            <MainContainer>
                <MainTitleWrapper>
                    {currentIndex - 1 >= 0 &&
                        <CircleButton onClick={handlePrevClick}>
                            <SimpleArrowIcon/>
                        </CircleButton>
                    }

                    <MainTitle isMobile={isMobile}>
                        {phasesData[currentIndex].title}
                    </MainTitle>

                    {currentIndex + 1  < phasesData.length &&
                        <CircleButton onClick={handleNextClick}>
                            <SimpleArrowIcon/>
                        </CircleButton>
                    }
                </MainTitleWrapper>

                <Phases/>

                <Resources/>
            </MainContainer>
        </MainWrapper>
    )
}