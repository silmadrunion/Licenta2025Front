import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowUpShortWide, faFilter} from '@fortawesome/free-solid-svg-icons'


export default function SortFilterSearch(){

    return(
        <div className='block'>
            <input className='w-5/6 ' type="text" placeholder="Search for games to trade"/>
            <span >
                <FontAwesomeIcon className='ml-2 w-5 h-5 text-[#B1EDE8]' icon={faMagnifyingGlass} />
                <FontAwesomeIcon className='ml-2 w-5 h-5 text-[#B1EDE8]' icon={faArrowUpShortWide} />
                <FontAwesomeIcon className='ml-2 w-5 h-5 text-[#B1EDE8]' icon={faFilter} /> 
            </span>
        </div>
    )
}