import RowTablecommon from "../../../shared/Table/RowTablecommon"
import DeleteGame from "../../../features/delete-game/DeleteGame"
import ViewEditGame from "../../../features/view-edit-game/ViewEditGame"
import RowTableMyListingsOffers from "./RowTableMyListingsOffers"
import React, {useState} from 'react'



export default function RowTableMyListings(props){

    let rowData = props.rowData
    let currentPage = props.currentPage


    const [ rowMyListings, setRowMyListings ] = useState(true);


    // button to show/hide offers
    let button 
    if( rowMyListings) {
        button = <button onClick={ () => setRowMyListings(false)} >  V </button>
    } else {
        button =  <button onClick={ () => setRowMyListings(true)} >  /\ </button>
    }

    //offers section
    let offers 
    if (rowMyListings) {
        offers = <RowTableMyListingsOffers rowData={rowData.offers}/>
    } else {
        offers = <div className="hidden"/>
    }


    return(
        <div className="flex flex-col row_table px-8 py-8" >
            <div className="flex">
                {rowData.offers.length != 0 ?                   
                    ( button )
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
                    ( offers )
                    :
                    ( <div className="hidden"/> )
                }
        </div>
    )
}