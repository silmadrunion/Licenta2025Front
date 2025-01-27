import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function ProposeTrade() {

    return(
        <div className='flex'>
            <button >
                <FontAwesomeIcon className='icon' icon={faArrowRightArrowLeft} />
            </button>
        </div>
    )
}