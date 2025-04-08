import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import DeleteGameConfirmationModal from './DeleteGameConfirmationModal'



export default function DeleteGame(props){

    let gameId = props.gameId
    let gameName = props.gameName
    let currentPage = props.currentPage

    const[ DeleteGame, setDeleteGame] = useState(false)


    let link 
    switch(currentPage){
        case "libraryPage":
            link = `http://127.0.0.1:5000//game?game-id=${gameId}`
    }

    function deleteGame(){
        fetch( link, {
            method : "DELETE",
            headers: {"Accept": "application/json"}
        })
        .then( res => { return res.json(); })
        .catch( err => console.log(err))

        closeModal()

        props.handleRefresh()
    }

    function closeModal(){
        setDeleteGame(false)
    }


    return(
        <div>
            <button className='mr-4 inline flex  pt-2' onClick={ () => setDeleteGame(true)}>
                <FontAwesomeIcon className='w-5 h-5 text-[#B1EDE8]' icon={faTrash} />
            </button>
            { DeleteGame ? 
                    <DeleteGameConfirmationModal closeModal={closeModal} gameName={gameName} deleteGame={deleteGame}/> 
                : ( <div className="hidden"/>)}
        </div>

    )
}