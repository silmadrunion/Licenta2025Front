import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import AddGamesFromLibrary from "./components/AddGamesFromLibrary"
import AddGamesToLibary from './components/AddGamesToLibary'

export default function AddGames(props){

    let currentPage = props.currentPage
    let refreshTable = props.refreshTable

    const [addGame, setAddGame] = useState(false)

    function closeModal(){
        setAddGame(false)
    }

    let modal 
    if ( currentPage == "libraryPage"){
        modal = <AddGamesToLibary closeModal={closeModal} refreshTable={refreshTable}/>
    } else {
        modal = <AddGamesFromLibrary  closeModal={closeModal} action={"addGame"}/>
    }
        
    return(
        <div>
            <button className='mr-4 inline flex  pt-2' onClick={ ( ) => {setAddGame(true)} }>
                <FontAwesomeIcon className='w-5 h-5 text-[#B1EDE8]' icon={faCirclePlus}  />
            </button>
                { addGame ? modal : ( <div className="hidden"/> )}
        </div>
    )
    
}