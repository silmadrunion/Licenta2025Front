import AddGameSideTable from './AddGameSideTable'
import { useState, useEffect } from 'react'

export default function AddGamesFromLibrary(props){

     const[ AddGamesFromLibrary, setAddGamesFromLibrary] = useState()

     let action = props.action

        useEffect(() => {
            //to update id 
            fetch( "http://127.0.0.1:5000/game?user-id=somethinng", {
            method: "GET",
            headers: {"Accept": "application/json"}
            })
                .then( res => { return res.json(); })
                .then( data => setAddGamesFromLibrary(data))
                .catch( err => console.log(err) )
        }, [])


    let content = <div></div>
    switch(action){
        case "addGame" :
            content = 
            <div  className='absolute w-screen h-screen top-0 left-o right-0 bottom-0 flex '  >
                <div style={{ background : "rgba(0,0,0,0.66)"}} 
                    onClick={ ( ) => {props.closeModal()}}
                    className='w-2/3'>
                </div>

                <div className='w-1/3 h-screen p-4 bg-[#6D435A] p-10 border-[#B1EDE8] border-l-2'>
                    <AddGameSideTable AddGamesFromLibrary={AddGamesFromLibrary} action={action}/>
                    <div className='flex flex-row mt-4 justify-end'>
                        <button className='border-1 bg-[#6e908d] p-1 px-4  rounded-full'  onClick={ ( ) => {props.closeModal()}}>Cancel</button>
                        <button className='border-1 bg-[#86B0AC] p-1 px-4 ml-4 rounded-full'> Add</button>
                    </div>
                </div>
            </div>
            break;
        case "proposeTrade":
            content = 
                <AddGameSideTable AddGamesFromLibrary={AddGamesFromLibrary} action={action}/>
            break;
        default :
            console.log("Issue on AddGamesFromLibrary")
        }

    return (content)
}