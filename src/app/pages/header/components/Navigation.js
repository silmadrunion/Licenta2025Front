import { Link } from "react-router-dom";


export default function Navigation() {


    const handleClickNavigate = (e) => {
        console.log(e.target.id)
   
    }

    return (
    <span className="grow content-end"> 
        <button id="btnAllGames" className="py-2">
            <Link className="bg-[#6A9491] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" to="/home">Home</Link>
        </button>
        <button id="btnMyListings" className="py-2" >
            <Link className="bg-[#D95865] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" to="/listings">My Listings</Link>
        </button>
        <button id="btnMyOffers" className="py-2" >
            <Link className="bg-[#B166BB] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" to="/offers">My Offers</Link>
        </button>
        <button id="btnMyLibrary" className="py-2">
            <Link className="bg-[#7066BB] px-4 py-2 ml-2 w-35 text-white font-semibold rounded-t-lg" to="/library">My Library</Link>
        </button>
    </span>
    )
}

