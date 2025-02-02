import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowUpShortWide, faFilter} from '@fortawesome/free-solid-svg-icons'


export default function SortFilterSearch(props){

    return(
        <div className='flex border-2 border-[#B1EDE8] rounded-md p-2 h-8'>
            <input className='min-w-80 bg-[#352D39] text-[#FFFCF9] h-5 self-center' type="text" placeholder="Search for games to trade"/>
            <span className='flex self-center' >
                <button className='inline ml-2 w-5 h-5 text-[#FFFCF9]'>
                <FontAwesomeIcon  icon={faMagnifyingGlass} />
                </button>
                <button className='inline ml-2 w-5 h-5 text-[#FFFCF9]'>
                <FontAwesomeIcon  icon={faArrowUpShortWide} />
                </button>
                <button className='inline ml-2 w-5 h-5 text-[#FFFCF9]'>
                <FontAwesomeIcon  icon={faFilter} /> 
                </button>
            </span>
        </div>
    )
}