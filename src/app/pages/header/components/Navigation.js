export default function Navigation() {


    const handleClickNavigate = (e) => {
        console.log(e.target.id)
   
    }

    return (
    <span> 
        <button id="btnAllGames" onClick={handleClickNavigate}>All Games</button>
        <button id="btnMyListings" onClick={handleClickNavigate}>My listings</button>
        <button id="btnMyOffers" onClick={handleClickNavigate}>My Offers</button>
        <button id="btnMyLibrary" onClick={handleClickNavigate}>My Library</button>
    </span>
    )
}

