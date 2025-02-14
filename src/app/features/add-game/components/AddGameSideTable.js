

export default function AddGameSideTable(props){

    let AddGamesFromLibrary = props.AddGamesFromLibrary

return(
    <div className='w-1/3'>
        <div className='flex flex-col p-4 bg-[#6D435A]  p-10 border-[#B1EDE8] border-l-2 h-screen'> 
            <p className='text-2xl font-bold text-start'>Add your game to listing </p>
            <p className='text-start'>this will remove the game from My Library</p>
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
                    : <p> Seems like you have not added games yet into my Library. Please add games there and then you will be able to list them here. </p>               
                }
            </div>
            <div className='flex flex-row mt-4 justify-end'>
                <button className='border-1 bg-[#6e908d] p-1 px-4  rounded-full' onClick={ ( ) => {props.closeModal()}} >Cancel</button>
                <button className='border-1 bg-[#86B0AC] p-1 px-4 ml-4 rounded-full'>Add</button>
            </div>
        </div>
    </div>
)
}