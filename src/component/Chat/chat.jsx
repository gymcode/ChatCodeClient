import React, {Fragment, useState, useEffect, useCallback} from 'react'
import querystring from 'query-string'
import socketio from 'socket.io-client'
import '../../styles/main.css'

let socket;

const Chat = ({location})=>{
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const ENDPOINT = 'localhost:5000'

    React.useEffect(()=>{
        const {name, room} = querystring.parse(location.search)

        socket = socketio(ENDPOINT)        
        setName(name)
        setRoom(room)

        socket.emit('join', {name, room}, ( )=>{
            
        })

        return ()=>{
            socket.emit('disconnect')

            socket.off()
        }

    }, [ENDPOINT, location.search])

    return(
        <Fragment>
            <div>adsdsadasd</div>
        </Fragment>
    )
}

export default Chat