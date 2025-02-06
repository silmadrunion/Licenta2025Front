import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function DeleteGame(){

    
    return(
        <div className='flex'>
            <button >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}