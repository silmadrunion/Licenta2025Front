import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default function ProfileIcon() {
    return (
    <span> 
        <button className='text-white px-2 py-2 mt-2'>
            <FontAwesomeIcon className="w-6 h-6" icon={faUser} />
            <FontAwesomeIcon className="w-6 h-6" icon={faCaretDown} />
        </button> 
    </span>
    )
}

