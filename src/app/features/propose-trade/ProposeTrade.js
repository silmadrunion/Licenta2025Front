import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ViewGameModal from '../view-game/ViewGameModal'

export default function ProposeTrade(props) {

    const [proposeTrade, setProposeTrade] = useState(false)

    let currentPage = props.currentPage

    function closeModal(){
        setProposeTrade(false)
    }

    return(
            <div className='flex '>
                <button onClick={ () => { setProposeTrade(!proposeTrade) } }>
                    <FontAwesomeIcon className='icon' icon={faArrowRightArrowLeft}  />
                </button>
                { proposeTrade ? <ViewGameModal closeModal={closeModal} action={"proposeTrade"} currentPage={currentPage}/> : ( <div className="hidden"/> )}
            </div>
    )
}
