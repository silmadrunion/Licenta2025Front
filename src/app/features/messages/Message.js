import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'



export default function Message(props){

    let rowMessageChatId = props.rowMessageChatId

    return(
        <div>
            <FontAwesomeIcon icon={faCommentDots} />
        </div>
    )
}