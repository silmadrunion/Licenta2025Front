
import RowTablecommon from "../../../shared/Table/RowTablecommon"
import ProposeTrade from "../../../features/propose-trade/ProposeTrade"
import ViewGame from "../../../features/view-edit-game/ViewEditGame"


export default function RowTableHomePage(props){

    let rowData = props.rowData
    let currentPage = props.currentPage
    
    return(
        <div className="flex row_table px-8 py-8" >
            <RowTablecommon rowData={rowData}/>
            <ProposeTrade currentPage={currentPage}/>
            <ViewGame currentPage={currentPage}/>
        </div>
    )
}