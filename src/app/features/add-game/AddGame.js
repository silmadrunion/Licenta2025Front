import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'



export default function AddGames(props){

    let currentPage = props.currentPage

    return(
        <div className='mr-4 inline flex  pt-2'>
            <FontAwesomeIcon className='w-5 h-5 text-[#B1EDE8]' icon={faCirclePlus} />
        </div>
    )
}