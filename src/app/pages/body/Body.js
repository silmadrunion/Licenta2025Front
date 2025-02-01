import HomePage from "../home-page/HomePage"
import MyLibrary from "../my-library/MyLibrary"
import MyListings from "../my-listings/MyListings"
import MyOffers from "../my-offers/MyOffers"
import Header from "../header/Header"
import { BrowserRouter as Router, Routes ,Route, Link } from "react-router-dom";


export default function Body() {
    return (
    <div className="body bg-[#352D39] text-white h-screen" > 
        <Router>
            <div>
                <Header/>

                <Routes >
                <Route path="/home" element={<HomePage/>} />
                <Route path="/listings" element={<MyListings/>} />
                <Route path="/offers" element={<MyOffers/>} />
                <Route path="/library" element={<MyLibrary/>} />
                </Routes>
            </div>
        </Router>

    </div>
    
    )
}


