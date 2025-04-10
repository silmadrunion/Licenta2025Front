import HomePage from "../home-page/HomePage"
import MyLibrary from "../my-library/MyLibrary"
import MyListings from "../my-listings/MyListings"
import MyOffers from "../my-offers/MyOffers"
import Header from "../header/Header"
import { BrowserRouter as Router, Routes ,Route, Link } from "react-router-dom";


export default function Body() {
    return (
    <div className="body bg-[#352D39] text-white w-full h-full pb-12" > 
        <Router>
            <div>
                <Header/>

                <Routes >
                <Route path="/" element={<HomePage/>} />
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


