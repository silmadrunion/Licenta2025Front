import { Link } from "react-router-dom";


export default function Navigation() {


    const handleClickNavigate = (e) => {
        console.log(e.target.id)
   
    }

    return (
    <span className="grow felx flex-row cards_navigation_container"> 
        <button style={{backgroundColor: "#6A9491"}} className="cards_navigation cards_navigation_active" id="btnAllGames" onClick={handleClickNavigate}>
            <Link to="/home">Home</Link>
        </button>
        <button style={{backgroundColor: "#D95865"}} className="cards_navigation" id="btnMyListings" onClick={handleClickNavigate}>
            <Link to="/listings">My Listings</Link>
        </button>
        <button style={{backgroundColor: "#B166BB"}} className="cards_navigation" id="btnMyOffers" onClick={handleClickNavigate}>
            <Link to="/offers">My Offers</Link>
        </button>
        <button style={{backgroundColor: "#7066BB"}} className="cards_navigation" id="btnMyLibrary" onClick={handleClickNavigate}>
            <Link to="/library">My Library</Link>
        </button>
    </span>
    )
}

