import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'



export default function AddGames(){

    return(
        <span className='mr-4'>
            <FontAwesomeIcon className='w-5 h-5 text-[#B1EDE8]' icon={faCirclePlus} />
        </span>
    )
}