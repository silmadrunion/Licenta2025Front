import AddGames from "../../features/add-game/AddGame"

export default function EmptyRow(props){

    let text = props.text
    let currentPage = props.currentPage

    if(currentPage =="offersPage"){
        return (
            <div className="flex flex-col  bg-[#515861] px-8 py-8 border-4 border-[#B1EDE8] rounded-lg " >
                <p>{text}</p>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col  bg-[#515861] px-8 py-8 border-4 border-[#B1EDE8] rounded-lg " >
                <AddGames />
                <p>{text}</p>
            </div>
        )
    }


        
    
}