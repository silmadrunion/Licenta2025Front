import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function ViewGame() {

    return(
        <div className='flex '>
            <button >
                <FontAwesomeIcon className='icon' icon={faEye} />
            </button>
            
        </div>
    )
}