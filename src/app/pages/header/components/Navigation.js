import { Link } from "react-router-dom";


export default function Navigation() {


    const handleClickNavigate = (e) => {
        console.log(e.target.id)
   
    }

    return (
    <span className="grow felx flex-row content-end"> 
        <button  className="bg-[#6A9491] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" id="btnAllGames" onClick={handleClickNavigate}>
            <Link to="/home">Home</Link>
        </button>
        <button className="bg-[#D95865] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" id="btnMyListings" onClick={handleClickNavigate}>
            <Link to="/listings">My Listings</Link>
        </button>
        <button className="bg-[#B166BB] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" id="btnMyOffers" onClick={handleClickNavigate}>
            <Link to="/offers">My Offers</Link>
        </button>
        <button className="bg-[#7066BB] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" id="btnMyLibrary" onClick={handleClickNavigate}>
            <Link to="/library">My Library</Link>
        </button>
    </span>
    )
}

