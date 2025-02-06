import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function ViewEditGame(props) {



    // logic to view edit game here as well as add trade table
    
    return(
        <div className='flex '>
            <button >
                <FontAwesomeIcon className='icon' icon={faEye} />
            </button>
            
        </div>
    )
}