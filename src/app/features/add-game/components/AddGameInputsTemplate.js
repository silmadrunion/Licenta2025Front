import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight,faStar } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'


// TO DO 
export default function AddGameInputsTemplate(props){

    let action = props.action
    let editGameData = props.editGameData ? props.editGameData  : false
    console.log(editGameData)
    //this will come from endpoint 
    let gameIamagesProvided = false

    //code for auto resize of text area name testarea
    // function textAreaAdjust(element) {
    //     element.style.height = "1px";
    //     element.style.height = (25+element.scrollHeight)+"px";
    //   }



      //useForm Hook

    const  { 
            register,
            handleSubmit,
            setError,
            formState : { errors, isSubmitting } 
            } = useForm(
                {
                    defaultValues : {
                        gameName : editGameData ? editGameData.gameDetails.gameName : "",
                        gameDescription : editGameData ? editGameData.gameDetails.gameDescription : "",
                        gamePlayerNo : editGameData ? editGameData.gameDetails.gamePlayerNo : "",
                        gameRecommandedAge : editGameData ? editGameData.gameDetails.gameReccommandedAge : "",
                        gamePlayTime :  editGameData ? editGameData.gameDetails.gamePlayTime : "",
                        gameComplexity : editGameData ? editGameData.gameDetails.gameComplexity : "",
                        gameDesigners : editGameData ? editGameData.gameDetails.gameDesigners : "",
                        gameArtists : editGameData ? editGameData.gameDetails.gameArtists : "",
                        gameBGGRating : editGameData ? editGameData.gameDetails.gameBGGRating : "",
                        gameMechanisms : editGameData ? editGameData.gameDetails.gameMechanisms : "",
                        gameCategories : editGameData ? editGameData.gameDetails.gameCategories : "",
                        gameDescriptionByClient : editGameData ? editGameData.gameDetails.gameDescriptionByClient : "",
                    }
                }
            );

    const onSubmit = async ( data ) => {
        try{ props.handleSubmitForm() }
        catch (error) { setError("root", { message: "Error occured."}) }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='bg-[#6D435A] absolute place-self-center p-6 px-8 rounded-md flex flex-col'>
            <div className='flex flex-row'> 
                <div className=" flex ">
                    <div className="flex flex-col w-1/5 mr-6">
                            <div className=" h-3/6 border-2 border-indigo-500">img here</div>
                            {/* <img></img> */}
                            <div className='flex justify-around mt-4'>
                                <button><FontAwesomeIcon icon={faArrowLeft}  className='text-[#B1EDE8] text-3xl'/></button>
                                <button><FontAwesomeIcon icon={faArrowRight} className='text-[#B1EDE8] text-3xl'/></button>
                            </div>

                    </div>

                    <div className="flex  flex-col" >
                        <div className="flex flex-col">

                                <div>
                                    <label className='text-xl font-semibold mb-4 flex' > Game Name
                                        <input {...register("gameName", { 
                                            required : "Game name is required.",
                                            //custom validation returns string when error and true when not error
                                            // validate : (value) => value.includes("s")
                                        })} id='gameName' placeholder='enter game name here' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md ml-4'/>
                                        { errors.gameName && <div className='text-red-500'> {errors.gameName.message}</div> }
                                    </label>
                                    <textarea {...register("gameDescription")} name='testarea' id='gameDescription' className='text-black font-normal w-full h-1/4 self-center mb-4 rounded-md  ' placeholder='enter game description here'/>
                                    { errors.gameDescription && <div className='text-red-500'> {errors.gameDescription.message}</div> }
                                </div>

                                <div className='flex flex-row justify-between mb-6'>
                                    <div className='grid gap-1'>
                                        <label className='text-xl font-semibold mb-4 ' > Players
                                            <input type='number' {...register("gamePlayerNo", { required : "Player No is required." })} id='gamePlayerNo'  className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                            { errors.gamePlayerNo && <div className='text-red-500'> {errors.gamePlayerNo.message}</div> }
                                        </label>
                                        <label  className='text-xl font-semibold mb-4 ' > Recommended Age
                                            <input type='number' {...register("gameRecommandedAge", { required :  "Game Recommanded age is required." })} id='gameRecommandedAge' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                            { errors.gameRecommandedAge && <div className='text-red-500'> {errors.gameRecommandedAge.message}</div> }
                                        </label>
                                        <label className='text-xl font-semibold mb-4 ' > Playing Time
                                            <input type='number'  {...register("gamePlayTime", { required :  "Game Play Time is required." })} id='gamePlayTime' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                            { errors.gamePlayTime && <div className='text-red-500'> {errors.gamePlayTime.message}</div> }
                                        </label>
                                        <label type='number'  className='text-xl font-semibold mb-4 ' > Complexity
                                            <input {...register("gameComplexity", { required : "Complexity is required.",
                                                validate : (value) =>  value > 5 ? "Complexity must be maximum 5." : true
                                            })} id='gameComplexity' placeholder='enter game name here' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md mr-2'/>
                                            /5
                                            { errors.gameComplexity && <div className='text-red-500'> {errors.gameComplexity.message}</div> }
                                        </label>
                                    </div>
                                    
                                    <div className='grid gap-1'>
                                        <div>
                                            <label className='text-xl font-semibold mb-4 ' > Designers
                                                <input {...register("gameDesigners")} id='gameDesigners' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                            </label>
                                        </div>
                                        <div>
                                            <label className='text-xl font-semibold mb-4  ' > Artists
                                                <input {...register("gameArtists")} id='gameArtists' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center font-bold mr-16'>
                                        <label className='text-xl font-semibold mb-4' > Board Game Geek rating
                                            <p className='text-bold self-center flex'> 
                                                <FontAwesomeIcon icon={faStar} className='text-[#B1EDE8] text-3xl'/> 
                                                <input type='number' {...register("gameBGGRating")} id='gameBGGRating'  className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                            </p>
                                        </label>
                                    </div>  
                                </div>    
                    
                        </div>

                        <div className="flex flex-row">
                            <div className="flex flex-row grow justify-between mr-6 ">
                                <div> 
                                    <label className='text-xl font-semibold mb-4' > Mechanisms
                                        <input {...register("gameMechanisms")} id='gameMechanisms' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                    </label>              
                                </div>

                                <div>
                                    <label className='text-xl font-semibold mb-4' > Categories
                                        <input {...register("gameCategories")} id='gameCategories' placeholder='names separated by comma' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                    </label>   
                                </div>  
                            </div>
        
                            <div className="flex flex-row w-3/6 ml-6 border-2 border-[#B1EDE8] rounded-md p-4 ">
                                <div className=" w-4/6 grid gap-1 mr-4">
                                    <h4 className='font-semibold'>Game Condition</h4>
                                    <div>                        
                                        <p className='font-semibold'>Description : </p>
                                        <input {...register("gameDescriptionByClient", { required : "Description is required. " })} id='gameDescriptionByClient' placeholder='describe the game condition' className='text-black font-normal h-5 self-center p-2 py-4 rounded-md'/>
                                        { errors.gameDescriptionByClient && <div className='text-red-500'> {errors.gameDescriptionByClient.message}</div> }
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
                        {/* root error message */}
                        { errors.root && <div className='text-red-500'> {errors.root.message}</div> }
                    </div>
                </div>
            </div>
                <div className='flex flex-row justify-end mt-6'>
                    <button className='border-1 bg-[#6e908d] p-1 px-4  rounded-full' onClick={ ( ) => {props.closeModal()}}>Cancel</button>
                    <button  className='border-1 bg-[#86B0AC] p-1 px-4 ml-4 rounded-full' type='submit' disabled={isSubmitting}> { action === "addGame" ? "Add Game To Libary" : "Save Changes"  } </button>
                </div>
        </form>

    )
}