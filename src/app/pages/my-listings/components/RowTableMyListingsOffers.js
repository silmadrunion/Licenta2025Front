import DeleteOffer from "./DeleteOffer"
import Message from "../../../features/messages/Message"

 export default function RowTableMyListingsOffers(props){

    let rowData = props.rowData

    return (
        <div className="felx border-t-2 mt-4 py-4 px-2">

            <div className="flex ">
                <div className="flex flex-col grow pl-20">
                    <p className="px-3">Client</p>
                    { rowData.map( row => <span className="pt-2">{row.gameUserDetails.gameUserName}</span> )}
                </div>
                <div className="flex flex-col grow">
                    <p className="px-3">Offered games</p>
                    { rowData.map( row => <span className="pt-2">
                        { row.offerGameDetails.map( game => <span className="pr-3">{game.gameName} </span> )}
                    </span> )}
                </div>
                <div className="flex flex-col grow" >
                    <p className="px-3">Status</p>
                    { rowData.map( row => <span className="pt-2">{row.offerstatus}</span> )}
                </div>
                <div className="flex flex-col grow">
                    <p className="h-7 pt-2"> </p>
                    { rowData.map( row => 
                        <div className="flex">
                            <Message rowMessageChatId={row.chatDataId}/>
                            <DeleteOffer offerId={row.offerId}/> 
                        </div>)}
                </div>
            </div>

        </div>
    )
 }

