import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/NavigationBar/navBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactUs from "./components/ContactMe/ContactUs";
import Projects from "./components/Pro-jects/Projects";
import Banner from "./components/Banner/Banner"

const App = () => {
    const [pageName, setPageName] = useState("")
        return (
            <div>
                <Nav pageName={pageName}/>
                <Banner pageName={pageName}/>
                <Routes>
                    <Route path="/Projects" element={< Projects setPageName={setPageName} />}/>
                    <Route path="/Portfolio" element={<Portfolio setPageName={setPageName} />}/>
                    <Route path="/ContactUs" element={<ContactUs setPageName={setPageName} />}/>
                    <Route path="/" element={<Home setPageName={setPageName}/>}/>
                </Routes>
                <Footer />
            </div>
        );
}

export default App;