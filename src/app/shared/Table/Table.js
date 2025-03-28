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
            .catch( err => console.log(err))
        }, [])


    switch(currentPage){
        case "homePage": 
            if(tableRowsData.length !== 0){
                return <div>{ tableRowsData.map( row => <RowTableHomePage rowData={row} currentPage={currentPage}/>  )} </div>
            } else {
                return <EmptyRow text={"No games available for trade. Add a game to be exchanged."}/>   
            }  

        case "listingsPage" :
            if(tableRowsData.length !== 0){
                return(
                    <div>
                        { tableRowsData.map( row => <RowTableMyListings rowData={row} currentPage={currentPage}/> )}  
                    </div>
                )
            } else {
                return <EmptyRow text={"Add a game from your Library here to start trading it."}/>   
            }  
        
        case "libraryPage":
            if(tableRowsData.length !== 0){
                return(
                    <div>
                        { tableRowsData.map( row => <RowTableMyLibrary rowData={row} currentPage={currentPage}/> )}  
                    </div>
                )
            } else {
                return <EmptyRow text={"Add a game to your library."}/>   
            }  
        
        case "offersPage":
            if(tableRowsData.length !== 0){
                return(
                    <div>
                        { tableRowsData.map( row => <RowTableMyOffers rowData={row} currentPage={currentPage}/> )}  
                    </div>
                )
            } else {
                return <EmptyRow currentPage={currentPage} text={"No offers made for your games yet."}/>   
            } 
    }


}