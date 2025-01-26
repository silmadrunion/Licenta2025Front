import React, { useState, useEffect } from "react";
import RowTableHomePage from "../pages/home-page/components/RowTableHomePage"
import RowTableMyLibrary from "../pages/my-library/components/RowTableMyLibrary"
import RowTableMyListings from "../pages/my-listings/components/RowTableMyListings"
import RowTableMyOffers from "../pages/my-offers/components/RowTableMyOffers"
import RoweTablecommon from "./RoweTablecommon";

export default function Table(props){

    let currentPage = props.currentPage
    let fetchLink = props.fetchLink

    const [ tableRowsData, settableRowsData ] = useState([])

    useEffect(() => {
        fetch( fetchLink, {
        method: "GET",
        headers: {"Accept": "application/json"}
      })
                .then( res => { return res.json(); })
                .then( data => settableRowsData( data ))
                .catch(err => console.log(err))
            }, [])

            
//maybe dynamic comp name ?
    function rowsToRender(rowComponent){
        return(            
            <div className="cards-container-main">
                { tableRowsData.map( row => <rowComponent rowData={row}/> )}  
            </div>)

    }

    if(currentPage == "homePage"){


        
                return(
                    <div>home Page table here
                        <div className="cards-container-main">
                            { tableRowsData.map( row => <RowTableHomePage rowData={row}/> )}  
                        </div>


                    </div>

    
        )
    }




}