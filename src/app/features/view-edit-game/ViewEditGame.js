import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ViewGameModal from './components/ViewGameModal'



export default function ViewEditGame(props) {

    let currentPage = props.currentPage
    
    const [viewGame, setViewGame] = useState(false)

    function closeModal(){
        setViewGame(false)
    }

        
    return(
        <div className='flex '>
            <button onClick={ () => { setViewGame(!viewGame) } }>
                <FontAwesomeIcon className='icon' icon={faEye} />
            </button>
            { viewGame ? <ViewGameModal closeModal={closeModal} action={"viewGame"}/> : ( <div className="hidden"/> )}
        </div>
        
    )
}