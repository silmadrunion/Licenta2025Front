import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ViewGameModal from './ViewGameModal'



export default function ViewGame(props) {

    let currentPage = props.currentPage
    
    const [viewGame, setViewGame] = useState(false)

    function closeModal(){
        setViewGame(false)
    }

    // to update here so that on propose trade there will be a side grid
    let action = "viewGame"
        
    return(
        <div className='flex '>
            <button onClick={ () => { setViewGame(!viewGame) } }>
                <FontAwesomeIcon className='icon' icon={faEye} />
            </button>
            { viewGame ? <ViewGameModal closeModal={closeModal} action={action}/> : ( <div className="hidden"/> )}
        </div>
        
    )
}