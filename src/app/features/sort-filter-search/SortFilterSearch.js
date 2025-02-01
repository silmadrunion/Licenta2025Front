import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowUpShortWide, faFilter} from '@fortawesome/free-solid-svg-icons'


export default function SortFilterSearch(){

    return(
        <div >
            <input  type="text" placeholder="text test"/>
            <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faArrowUpShortWide} />
                <FontAwesomeIcon icon={faFilter} /> 
            </span>
        </div>
    )
}