import RowTablecommon from "../../../shared/Table/RowTablecommon"
import EditGame from "../../../features/edit-game/EditGame"
import DeleteGame from "../../../features/delete-game/DeleteGame" 

export default function RowTableMyLibrary(props){

    let rowData = props.rowData
    let currentPage = props.currentPage
    let gameId = props.rowData["_id"]
    console.log(rowData)

    return(
        <div className="flex row_table px-8 py-8" >
            <RowTablecommon rowData={rowData}/>
            <EditGame currentPage={currentPage} gameId={gameId}/>
            <DeleteGame currentPage={currentPage} gameId={gameId} gameName={ rowData.gameDetails !== undefined ? rowData.gameDetails.gameName : ""}/>
        </div>
    )
}


