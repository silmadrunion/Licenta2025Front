export default function Navigation() {


    const handleClickNavigate = (e) => {
        console.log(e.target.id)
   
    }

    return (
    <span className="grow felx flex-row cards_navigation_container"> 
        <button style={{backgroundColor: "#6A9491"}} className="cards_navigation cards_navigation_active" id="btnAllGames" onClick={handleClickNavigate}>All Games</button>
        <button style={{backgroundColor: "#D95865"}} className="cards_navigation" id="btnMyListings" onClick={handleClickNavigate}>My listings</button>
        <button style={{backgroundColor: "#B166BB"}} className="cards_navigation" id="btnMyOffers" onClick={handleClickNavigate}>My Offers</button>
        <button style={{backgroundColor: "#7066BB"}} className="cards_navigation" id="btnMyLibrary" onClick={handleClickNavigate}>My Library</button>
    </span>
    )
}

