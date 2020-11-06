import React, {Fragment, useState} from 'react'; 
import {Link} from 'react-router-dom'
import '../styles/main.css'

export default function Join () {
    const [name, setName] = useState("")
    const [room , setRoom] = useState("")
    
    return(
        <Fragment>
           <div className={'h-screen w-full bg-black'}>
                <div className={'flex justify-center items-center h-full'}>
                    <div className={'h-56 w-1/4 '}>
                        <div className={'w-full flex justify-center my-4 text-white text-xl'}>Join the Chat room</div>
                        <hr className={'h-1 rounded bg-white'}/>
                        <div>
                           <div><input type="text" onChange={(event)=> setName(event.target.value)} className={'flex justify-center outline-none my-5 h-12 w-full px-3'} placeholder={'Name'}/></div>
                           <div><input type="text" onChange={(event)=> setRoom(event.target.value)} className={'flex justify-center outline-none my-5 h-12 w-full px-3'} placeholder={'Room'}/></div>
                        </div>
                        <div>
                            <Link onClick={event=> (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                <div className={'w-full flex justify-center text-white items-center h-12 bg-blue-600 '}>
                                    <p>Enter</p>
                                </div>
                            </Link>                
                        </div>
                    </div>
                </div>
           </div>
        </Fragment>
    )
}