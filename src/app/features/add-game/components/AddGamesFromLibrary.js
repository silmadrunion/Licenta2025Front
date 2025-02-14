import AddGameSideTable from './AddGameSideTable'
import { useState, useEffect } from 'react'

export default function AddGamesFromLibrary(props){

     const[ AddGamesFromLibrary, setAddGamesFromLibrary] = useState()


        useEffect(() => {
            fetch( "http://127.0.0.1:5000/game?user-id=somethinng", {
            method: "GET",
            headers: {"Accept": "application/json"}
          })
                    .then( res => { return res.json(); })
                    .then( data => setAddGamesFromLibrary(data))
                    .catch( err => console.log(err))
            }, [])


    return (
        <div  className=' absolute  w-screen h-screen top-0 left-o right-0 bottom-0 flex'  >
            <div style={{ background : "rgba(0,0,0,0.66)"}} 
                onClick={ ( ) => {props.closeModal()}}
                className='w-2/3'>
            </div>
            
            <AddGameSideTable AddGamesFromLibrary={AddGamesFromLibrary}/>

        </div>
    )
}