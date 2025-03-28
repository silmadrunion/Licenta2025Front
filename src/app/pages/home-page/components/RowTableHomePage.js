
import RowTablecommon from "../../../shared/Table/RowTablecommon"
import ProposeTrade from "../../../features/propose-trade/ProposeTrade"
import ViewGame from "../../../features/view-game/ViewGame"


export default function RowTableHomePage(props){

    let rowData = props.rowData
    let currentPage = props.currentPage
    let gameId = props.rowData["_id"]

    return(
        <div className="flex row_table px-8 py-8" >
            <RowTablecommon rowData={rowData}/>
            <ProposeTrade currentPage={currentPage}/>
            <ViewGame currentPage={currentPage} gameId={gameId}/>
        </div>
    )
}