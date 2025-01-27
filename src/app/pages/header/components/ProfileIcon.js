import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default function ProfileIcon() {
    return (
    <span> 
        <button className='white profile_icon'>
            <FontAwesomeIcon className="icon_profile" icon={faUser} />
            <FontAwesomeIcon className="icon_profile" icon={faCaretDown} />
        </button> 
    </span>
    )
}

