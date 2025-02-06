import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function DeleteOffer(props ){

    let offerId = props.offerId

    return(
        <button >
            <FontAwesomeIcon icon={faTrash} />
        </button>
    )
}