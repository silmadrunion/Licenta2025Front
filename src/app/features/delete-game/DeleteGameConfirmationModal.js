

export default function DeleteGameConfirmationModal(props){

    return (
        <div className='absolute grid w-screen h-screen top-0 left-o right-0 bottom-0 flex '>
                <div className='  w-screen h-screen top-0 left-o right-0 bottom-0 flex'
                style={{ background : "rgba(0,0,0,0.66)"}} 
                onClick={ ( ) => {props.closeModal()}}>  </div>
                
                <div className='bg-[#6D435A] absolute place-self-center p-6 px-8 rounded-md flex flex-col'>
                    <p>Are you sure you would like to delete {props.gameName} ?</p>
                    <div className='flex flex-row justify-end mt-6'>
                        <button className='border-1 bg-[#6e908d] p-1 px-4  rounded-full' onClick={ ( ) => {props.closeModal()}}>Cancel</button>
                        <button className='border-1 bg-[#B34C4C] p-1 px-4 ml-4 rounded-full' onClick={props.deleteGame}>Delete game</button>
                    </div>
                </div>
        </div>

    )

}