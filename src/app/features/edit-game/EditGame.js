import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



export default function EditGame(props){

    let currentPage = props.currentPage

    const [editGame, setEditGame] = useState(false)

    function closeModal(){
        setEditGame(false)
    }

    let modal 
    // if ( currentPage == "libraryPage"){
    //     modal = 
    //         <div>
    //             libraryPage
    //         </div>
    // } else {
    //     modal = <AddGamesFromLibrary  closeModal={closeModal} action={"addGame"}/>
    // }
        
    return(
        <div> 
            <button className='mr-4 inline flex  pt-2' onClick={ ( ) => {setEditGame(true)} }>
                <FontAwesomeIcon className='w-5 h-5 text-[#B1EDE8]' icon={faEdit}  />
            </button>
                { editGame ? modal : ( <div className="hidden"/> )}
        </div>
    )
    
}