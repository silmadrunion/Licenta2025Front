import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import EditGameModal from './components/EditGameModal';





export default function EditGame(props){


    let currentPage = props.currentPage


    const [editGame, setEditGame] = useState(false)


    function closeModal(){
        setEditGame(false)
    }


    let modal 
    switch(currentPage){
        case "libraryPage":
            modal = <EditGameModal closeModal={closeModal} gameId={props.gameId} currentPage={currentPage}/>
            break;
        case "offersPage":
            //offer edit 
            modal = undefined
            break;
        case "listingsPage":
            //same as library i think in a way 
            modal = undefined
        break;
        case "homePage":
            modal = undefined
        break;
        default :
            console.log("issue on EditGame")
    }

    return(
        <div> 
            <button className='mr-4 inline flex  pt-2' onClick={ ( ) => {setEditGame(true) } }>
                <FontAwesomeIcon className='w-5 h-5 text-[#B1EDE8]' icon={faEdit}  />
            </button>
                { editGame ? modal : ( <div className="hidden"/> )}
        </div>
    )
    
}