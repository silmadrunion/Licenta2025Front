import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight,faStar } from '@fortawesome/free-solid-svg-icons'



// TO DO 
export default function AddGameInputsTemplate(){

    let gameIamagesProvided = false

    //code for auto resize of text area name testarea
    function textAreaAdjust(element) {
        element.style.height = "1px";
        element.style.height = (25+element.scrollHeight)+"px";
      }

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
                            <label className='text-xl font-semibold mb-4 flex' > Game Name
                                <input id='gameName' placeholder='enter game name here' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md ml-4'/>
                            </label>
                            <textarea name='testarea' id='gameDescription' className='text-black font-normal w-full h-1/4 self-center mb-4 rounded-md  ' placeholder='enter game description here'/>
                        </div>
                        <div className='flex flex-row justify-between mb-6'>
                            <div className='grid gap-1'>
                                <label className='text-xl font-semibold mb-4 ' > Players
                                    <input id='gamePlayerNo'  className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                 </label>
                                 <label className='text-xl font-semibold mb-4 ' > Recommended Age
                                    <input id='gameRecommandedAge' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                 </label>
                                 <label className='text-xl font-semibold mb-4 ' > Playing Time
                                    <input id='gamePlayTime' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                 </label>
                                 <label className='text-xl font-semibold mb-4 ' > Complexity
                                    <input id='gameComplexity' placeholder='enter game name here' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md mr-2'/>
                                     /5
                                 </label>
                             </div>
                             
                            <div className='grid gap-1'>
                                <div>
                                    <label className='text-xl font-semibold mb-4 ' > Designers
                                        <input id='gameDesigners' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                    </label>
                                </div>
                                <div>
                                    <label className='text-xl font-semibold mb-4  ' > Artists
                                        <input id='gameArtists' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center font-bold mr-16'>
                                
                                <label className='text-xl font-semibold mb-4' > Board Game Geek rating
                                    <p className='text-bold self-center flex'> 
                                        <FontAwesomeIcon icon={faStar} className='text-[#B1EDE8] text-3xl'/> 
                                        <input id='gameBGGRating'  className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                    </p>
                                </label>
                                
                            </div>  
                        </div>    
            
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-row grow justify-between mr-6 ">
                        <div> 
                            <label className='text-xl font-semibold mb-4' > Mechanisms
                                <input id='gameMechanisms' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                            </label>              
                        </div>

                        <div>
                            <label className='text-xl font-semibold mb-4' > Categories
                                <input id='gameCategories' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                            </label>   
                        </div>  
                    </div>
 
                    <div className="flex flex-row w-3/6 ml-6 border-2 border-[#B1EDE8] rounded-md p-4 ">
                        <div className=" w-4/6 grid gap-1 mr-4">
                            <h4 className='font-semibold'>Game Condition</h4>
                            <div>                        
                                <p className='font-semibold'>Description : </p>
                                <input id='gameDescriptionByClient' placeholder='describe the game condition' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                            </div>
                            <span className='font-semibold'>Pictures of the game provided: {gameIamagesProvided ? "Yes" : "No" } </span>
                        </div>
                        <div className=" w-2/6 grid gap-1">
                            <div>
                                <p className='font-semibold'>Seller</p>
                                <div className=" h-40  border-2 border-indigo-500">img here</div>
                                <img></img>
                            </div>
                            <div>
                            
                                {/* // TO ADD here after user details is a  thing 
                                
                                <p>{gameData.gameUserDetails.gameUserName}</p>
                                <p className='font-semibold'>Rating: {gameData.gameUserDetails.gameUserRating}</p> */}
                            </div>
                        </div>
                    </div>            
                </div>
            </div>


        </div>
    )
}