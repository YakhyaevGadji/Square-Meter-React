import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Favorite from "../Favorite/Favorite";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomeMain from "../main/HomeMain";
import Object from "../object/Object";

function App() {
    return (
        <Router>
        
            <div className="content-wrapper">
                <Header/>
                <div className="logo-wrapper">
                    <Link to="/" className="logo">
                        <div className="logo__title">КВАДРАТНЫЙ МЕТР</div>
                        <div className="logo__subtitle">
                            купить квартиру в один клик
                        </div>
                    </Link>
                </div>
                <Routes>
                    <Route path="/" element={<HomeMain/>}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="/object/:id" element={<Object/>}/>
                </Routes>
            </div>

            <Footer/>

        </Router>
    );
}

export default App;