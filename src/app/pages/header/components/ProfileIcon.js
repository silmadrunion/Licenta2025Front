import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'

export default function ProfileIcon(props) {

    const [ showProfile, setShowProfile ] = useState(false)

    // let profileData = props.profile

    return (
    <span className='flex flex-col'> 
        <button className='text-white px-2 py-2 mt-2  self-end' onClick={ ( ) => setShowProfile(!showProfile) }>
            <FontAwesomeIcon className="w-6 h-6" icon={faUser} />
            <FontAwesomeIcon className="w-6 h-6" icon={faCaretDown} />
        </button> 

        { showProfile ? (
            <div className='flex flex-col justify-start border-2 border-[#B1EDE8] rounded-lg absolute top-14 right-7 p-6 bg-[#352D39]'>
                <div className='flex'>
                    <img  style={{width:" 5.5rem"}} className=' h-32  border-2 border-[#B1EDE8]'></img>
                    <div className='ml-4'> 
                        <p className='text-2xl font-bold text-start'>name</p>
                        <span className='text-center'>Rating number</span>
                        <span></span>
                    </div>
                </div>
                <button className='w-40 mt-2 text-start'>View Profile</button>
                <button className='w-40 text-start'>Log Out</button>
            </div>
            ) 
            :  ( <div className="hidden"/> )}
    </span>
    )
}

