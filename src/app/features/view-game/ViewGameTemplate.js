import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight,faStar } from '@fortawesome/free-solid-svg-icons'

export default function ViewGameTemplate(props){

    let gameData = props.gameData

    return (

        <div className=" flex ">
            <div className="flex flex-col w-1/5 mr-6">
                    <div className=" h-3/6 border-2 border-indigo-500">img here</div>
                    {/* <img></img> */}
                    <div className='flex justify-around mt-4'>
                        <button><FontAwesomeIcon icon={faArrowLeft}  className='text-[#B1EDE8] text-3xl'/></button>
                        <button><FontAwesomeIcon icon={faArrowRight} className='text-[#B1EDE8] text-3xl'/></button>
                    </div>

            </div>

            <div className="flex  flex-col">
                <div className="flex flex-col">
                        <div>
                            <h4 className='text-xl font-bold mb-4 '>{gameData.gameDetails.gameName}</h4>
                            <p className=' mb-4'>{gameData.gameDetails.gameDescription}</p>
                        </div>
                        <div className='flex flex-row justify-between mb-6'>
                            <div className='grid gap-1'>
                                <p>Players {gameData.gameDetails.gamePlayerNo}</p>
                                <p>Recommended Age {gameData.gameDetails.gameRecommandedAge}+</p>
                                <p>Playing Time {gameData.gameDetails.gamePlayTime}</p>
                                <p>Complexity {gameData.gameDetails.gameComplexity} / 5</p>
                            </div>
                            <div className='grid gap-1'>
                                <div>
                                    <p className='font-bold'>Designers</p>
                                    <div>
                                        { gameData.gameDetails.gameDesigners.map( dessigner => <p>{dessigner}</p> ) }
                                    </div>
                                    
                                </div>
                                <div>
                                    <p className='font-bold'>Artists</p>
                                    <div>
                                        { gameData.gameDetails.gameArtists.map( artist => <p>{artist}</p> ) }
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col justify-center font-bold mr-16'>
                                <p className='align-middle font-bold'>Board Game Geek rating </p>
                                <p className='text-bold self-center'> <FontAwesomeIcon icon={faStar} className='text-[#B1EDE8] text-3xl'/> {gameData.gameDetails.gameBGGRating}</p>
                            </div>  
                        </div>    
            
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-row grow justify-between mr-6 ">
                        <div>
                            <p className='font-bold'>Mechanisms</p>
                                <div>
                                    { gameData.gameDetails.gameMechanisms.map( mechanism => <p>{mechanism}</p> ) }
                                </div>                
                        </div>

                        <div>
                            <p className='font-bold'>Categories</p>
                            <div>
                                { gameData.gameDetails.gameCategories.map( category => <p>{category}</p> ) }
                            </div>  
                        </div>  
                    </div>
 

                    <div className="flex flex-row w-3/6 ml-6 border-2 border-[#B1EDE8] rounded-md p-4 ">
                        <div className=" w-4/6 grid gap-1 mr-4">
                            <h4 className='font-bold'>Game Condition</h4>
                            <div>                        
                                <p className='font-bold'>Description : </p>
                                <p>{gameData.gameDetails.gameDescriptionByClient}</p>
                            </div>
                            <span className='font-bold'>Pictures of the game provided: Yes</span>
                        </div>
                        <div className=" w-2/6 grid gap-1">
                            <div>
                                <p className='font-bold'>Seller</p>
                                <div className=" h-40  border-2 border-indigo-500">img here</div>
                                <img></img>
                            </div>
                            <div>
                                <p>{gameData.gameUserDetails.gameUserName}</p>
                                <p className='font-bold'>Rating: {gameData.gameUserDetails.gameUserRating}</p>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}