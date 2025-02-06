import RowTablecommon from "../../../shared/Table/RowTablecommon"
import DeleteGame from "../../../features/delete-game/DeleteGame"
import ViewEditGame from "../../../features/view-edit-game/ViewEditGame"
import RowTableMyListingsOffers from "./RowTableMyListingsOffers"

export default function RowTableMyListings(props){

    let rowData = props.rowData
    let currentPage = props.currentPage

    return(
        <div className="flex flex-col row_table px-8 py-8" >
            <div className="flex">
                {rowData.offers.length != 0 ?
                    ( <button>  V </button> )
                    :
                    ( <div className="hidden"/> )
                }

                <RowTablecommon rowData={rowData}/>

                {rowData.offers.length == 0 ?
                    ( <ViewEditGame  currentPage={currentPage} /> )
                    :
                    ( <div className="hidden"/>)
                }

                <DeleteGame currentPage={currentPage}/>
            </div>

            {rowData.offers.length != 0 ?
                    ( <RowTableMyListingsOffers rowData={rowData.offers}/> )
                    :
                    ( <div className="hidden"/> )
                }
        </div>
    )
}