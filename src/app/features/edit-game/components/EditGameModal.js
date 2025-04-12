import $ from 'jquery';
import { useEffect,useState } from 'react';
import AddGameInputsTemplate from '../../add-game/components/AddGameInputsTemplate';



export default function EditGameModal(props){

    let gameId = props.gameId
    let currentPage = props.currentPage

    const [ editGameData, setEditGameData ] = useState(undefined)


    let link 
    switch(currentPage){
        case "libraryPage":
            link = `http://127.0.0.1:5000//game?game-id=${gameId}`
            break;
            //other pages here 
        default :
            link = undefined
    }


    useEffect(() => {
        fetch( link, {
        method: "GET",
        headers: {"Accept": "application/json"}
        })
            .then( res => { return res.json(); })
            .then( data => setEditGameData(data))
            .catch( err => console.log(err))
    }, [])


    function handleUpdateGameToLibrary(){
        fetch(link , {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gameDetails : {
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
                }
            })
          })
    //ENABLE AFTER DONE WORK
        //props.closeModal()

            // to be replaced 
            //props.refreshTable()
    
        }



    return (
        <div className='absolute grid w-full h-full top-0 left-o right-0 bottom-0 flex '>
            <div className='  w-screen h-screen top-0 left-o right-0 bottom-0 flex'
                style={{ background : "rgba(0,0,0,0.66)"}} 
                onClick={ ( ) => {props.closeModal()}} >
            </div>
            { editGameData ? <AddGameInputsTemplate editGameData={editGameData} action={"editGame"} closeModal={props.closeModal} handleSubmitForm={handleUpdateGameToLibrary}/> : <div></div> }
        </div>
    )

}