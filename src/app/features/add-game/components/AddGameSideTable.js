

export default function AddGameSideTable(props){

    let AddGamesFromLibrary = props.AddGamesFromLibrary
    let action =  props.action

return(

        <div className='flex flex-col  '> 
            <p className='text-2xl font-bold text-start'>
            { action == 'addGame' ? "Add your game to listing" : ""}
             
            </p>
            <p className='text-start'> { action == 'addGame' ? "this will remove the game from My Library" : ""} </p>
            <div className='flex flex-col mt-4'>
                { 
                    AddGamesFromLibrary ? 
                    AddGamesFromLibrary.map( game =>                     
                    <div className='border-2 border-[#B1EDE8] flex p-2'>
                        <input type='checkbox' className='rounded-lg'></input>
                        <img className='pl-4'></img>
                        <p className='pl-4'>{game.gameDetails.gameName}</p>
                    </div> 
                    ) 
                    : <p> 
                    { action == 'addGame' ? "Seems like you have not added games yet into my Library. Please add games there and then you will be able to list them here." : "" } </p>               
                }
            </div> 
        </div>
)
}