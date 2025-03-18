import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function DeleteGame(){

    
    return(
        <div className='flex'>
            <button className='mr-4 inline flex  pt-2'>
                <FontAwesomeIcon className='w-5 h-5 text-[#B1EDE8]' icon={faTrash} />
            </button>
        </div>
    )
}