import { useState } from "react";
import { MobileView, BrowserView } from "react-device-detect";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { Navbar } from "./components/Sidebar/components/Navbar/Navbar";
import './App.css';

function App() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const browserViewStyles = {
        display: 'flex'
    }

  return (
    <div className="App">
        <Header
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
        />

        <MobileView>
            {isBurgerOpen
                ? <Navbar/>
                : <MainContent/>
            }
        </MobileView>

        <BrowserView style={browserViewStyles}>
            <Sidebar/>
            <MainContent/>
        </BrowserView>
    </div>
  );
}

export default App;
