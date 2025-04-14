import AddGameInputsTemplate from "./AddGameInputsTemplate"
// import React, { useEffect } from "react";
import $ from 'jquery';



export default function AddGamesToLibary(props){

    function handleAddGameToLibrary(){

    fetch('http://127.0.0.1:5000/game', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                // gameImagesProvided :  ,
                gameName : $("#gameName")[0].value,
                gameDescriptionByClient: $("#gameDescriptionByClient")[0].value,
                // gameImagePath: ,
                gameDescription: $("#gameDescription")[0].value,
                gamePlayerNo: $("#gamePlayerNo")[0].value,
                gameReccommandedAge: $("#gameRecommandedAge")[0].value,
                gamePlayTime: $("#gamePlayTime")[0].value,
                gameComplexity: $("#gameComplexity")[0].value,
                gameBGGRating: $("#gameBGGRating")[0].value,
                gameDesigners : [ $("#gameDesigners")[0].value.split(",") ] ,
                gameArtists: [ $("#gameArtists")[0].value.split(",") ] ,
                gameMechanisms: [ $("#gameMechanisms")[0].value.split(",") ] ,
                gameCategories : [ $("#gameCategories")[0].value.split(",") ] 
        })
      })
        props.closeModal()
        props.refreshTable()
    }


    return (
        <div className='absolute grid w-full h-full top-0 left-o right-0 bottom-0 flex '>
            <div className='  w-screen h-screen top-0 left-o right-0 bottom-0 flex'
                style={{ background : "rgba(0,0,0,0.66)"}} 
                onClick={ ( ) => {props.closeModal()}}
            ></div>
                <AddGameInputsTemplate closeModal={props.closeModal} action={"addGame"} handleSubmitForm={handleAddGameToLibrary}/>
        </div>
    )
}