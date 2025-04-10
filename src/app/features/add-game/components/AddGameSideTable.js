

export default function AddGameSideTable(props){

    let AddGamesFromLibrary = props.AddGamesFromLibrary
    let action =  props.action

    let title = ""
    let message = ""
    let emptyMessage = ""
    let styleDisplayHeight 
    switch(action){
        case "addGame" :
            title = "Add your game to listing"
            message = "this will remove the game from My Library"
            emptyMessage = "Seems like you have not added games yet into my Library. Please add games there and then you will be able to list them here."
            styleDisplayHeight = {height :"53rem"} 
            break;
        case "proposeTrade":
            title = "Propose Trade "
            message = "this will remove the game from My Library"
            emptyMessage = "Seems like you have not added games yet into my Library. Please add games there and then you will be able to list them here."
            styleDisplayHeight = {height :"39rem"}
            break;
        default :
            console.log("Issue on AddGameSideTable")
        }

return(

        <div className='flex flex-col  '> 
            <p className='text-2xl font-bold text-start'> { title } </p>
            <p className='text-start'> { message } </p>
            <div className='flex flex-col mt-4 overflow-y-auto' style={styleDisplayHeight} >
                { 
                    AddGamesFromLibrary ? 
                        AddGamesFromLibrary.map( game =>    
                            
                        game.gameDetails !==undefined ? 
                            <div className='border-2 border-[#B1EDE8] flex p-2'>
                            <input type='checkbox' className='rounded-lg'></input>
                            <img className='pl-4' alt=""></img>
                            <p className='pl-4'>{game.gameDetails.gameName}</p>
                            </div> 
                            :
                            <div> </div> 
                        ) 
                    : <p> { emptyMessage } </p>               
                }
            </div> 
        </div>
)
}