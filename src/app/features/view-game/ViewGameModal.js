import ViewGameTemplate from './ViewGameTemplate'
import AddGamesFromLibrary from '../add-game/components/AddGamesFromLibrary'
import { useState, useEffect } from 'react'


export default function ViewGameModal(props){

    

    const[ ViewGameModal, setViewGameModal] = useState({
        data : undefined,
        action : props.action
    })

    let action = props.action
    let currentPage = props.currentPage

    useEffect(() => {
        //to update id 
        fetch( "http://127.0.0.1:5000//listing?listing-id=something", {
        method: "GET",
        headers: {"Accept": "application/json"}
        })
            .then( res => { return res.json(); })
            .then( data => setViewGameModal(
            {
                ...ViewGameModal,
                data : data
            }
            ))
            .catch( err => console.log(err))
    }, [])

    function actionProposeTrade(){

        if(action =="viewGame"){
            setViewGameModal(
                {
                    ...ViewGameModal,
                    action : "proposeTrade"
                }
                )
        }
        //propose trade integration 
    }


    //buttons
    let buttons 
    switch(currentPage){
        case "homePage":
            buttons = <button className='border-1 bg-[#86B0AC] p-1 px-4 ml-4 rounded-full' onClick={  () => {actionProposeTrade()} }>Propose Trade</button>
        break;
        case "listingsPage":
            buttons = undefined
        break;
        case "offersPage":
            //offers buttons
            buttons = undefined
        break;
        case "libraryPage":
            //library buttons
            buttons = undefined
        break;
        default :
            console.log("Issue on ViewGameModal")
    }

    return (
        <div className='absolute grid w-full h-full top-0 left-o right-0 bottom-0 flex '>
            <div className='w-full h-full top-0 left-o right-0 bottom-0 flex'
                style={{ background : "rgba(0,0,0,0.66)"}} 
                onClick={ ( ) => {props.closeModal()}}
            ></div>

            <div className='bg-[#6D435A] absolute place-self-center p-14 rounded-md flex flex-col h-4/5 w-4/5'>
                <div className='flex flex-row h-full'> 
                    <div className='w-full' >
                        { ViewGameModal.data ? <ViewGameTemplate gameData={ViewGameModal.data}/> : ( <div className="hidden"/> ) }
                    </div>
                    
                    { ViewGameModal.action === 'proposeTrade' ?  
                        <div className='w-2/6 h-full border-l-2 ml-8 pl-8' >
                            <AddGamesFromLibrary  action={ViewGameModal.action} />
                        </div>
                        :( <div className="hidden"/> ) }
                </div>
                <div className='flex flex-row justify-end mt-6'>
                    <button className='border-1 bg-[#6e908d] p-1 px-4  rounded-full' onClick={ ( ) => {props.closeModal()}}>Cancel</button>
                    {buttons}
                </div>
            </div>
            
        </div>
    )
}