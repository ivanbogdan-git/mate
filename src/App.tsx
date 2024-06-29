import Header from './components/Header';
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home.tsx";
import About from "./views/About.tsx";

const App = () => {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            <Footer />
        </>
    );
};

export default App
