import React, { useState, useEffect } from "react";
import RowTableHomePage from "../../pages/home-page/components/RowTableHomePage"
import RowTableMyLibrary from "../../pages/my-library/components/RowTableMyLibrary"
import RowTableMyListings from "../../pages/my-listings/components/RowTableMyListings"
import RowTableMyOffers from "../../pages/my-offers/components/RowTableMyOffers"
import EmptyRow from "./EmptyRow";


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

//work in progress not used 
    // function rowsToRender(rowComponent){
    //     
    //     if(tableRowsData.length != 0){
    //         console.log("not empty")   
    //         return(            
    //             <div className="cards-container-main">
    //                 { tableRowsData.map( row => <rowComponent rowData={row}/> )}  
    //             </div>)
    
    //     }else {
    //         console.log("empty")   
    //         return <EmptyRow/>   
    
    //     }
    // }


    //maybe dynamic comp name on map?
    switch(currentPage){
        case "homePage": 
            if(tableRowsData.length !== 0){
                return <div>{ tableRowsData.map( row => <RowTableHomePage rowData={row}/> )} </div>

            } else {
                return <EmptyRow text={"No games available for trade. Add a game to be exchanged."}/>   
            }  

        case "listingsPage" :
            if(tableRowsData.length !== 0){
                return(
                    <div>
                        { tableRowsData.map( row => <RowTableMyListings rowData={row}/> )}  
                    </div>
                )
            } else {
                return <EmptyRow text={"Add a game from your Library here to start trading it."}/>   
            }  
        
        case "libraryPage":
            if(tableRowsData.length !== 0){
                return(
                    <div>
                        { tableRowsData.map( row => <RowTableMyLibrary rowData={row}/> )}  
                    </div>
                )
            } else {
                return <EmptyRow text={"Add a game to your library."}/>   
            }  
        
        case "offersPage":
            if(tableRowsData.length !== 0){
                return(
                    <div>
                        { tableRowsData.map( row => <RowTableMyOffers rowData={row}/> )}  
                    </div>
                )
            } else {
                return <EmptyRow currentPage={currentPage} text={"No offers made for your games yet."}/>   
            } 
    }


}