import RowTablecommon from "../../../shared/Table/RowTablecommon"
import EditGame from "../../../features/edit-game/EditGame"
import DeleteGame from "../../../features/delete-game/DeleteGame" 

export default function RowTableMyLibrary(props){

    let rowData = props.rowData
    let currentPage = props.currentPage
    
    return(
        <div className="flex row_table px-8 py-8" >
            <RowTablecommon rowData={rowData}/>
            <EditGame currentPage={currentPage}/>
            <DeleteGame currentPage={currentPage}/>
        </div>
    )
}


