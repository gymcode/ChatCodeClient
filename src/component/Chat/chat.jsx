import React, {Fragment, useState, useEffect, useCallback} from 'react'
import querystring from 'query-string'
import socketio from 'socket.io-client'
import '../../styles/main.css'

let socket;

const Chat = ({location})=>{
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
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

    useEffect(()=>{
        socket.on("message", (message)=>{
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (event)=>{
        event.preventDefault()

        socket.emit("sendMessage", message, ()=> setMessage(''))

    }

    console.log(message, messages)

    return(
        <Fragment>
            <div>
                <div className={'flex justify-center'}>
                    <input 
                        type="text" 
                        value={message}
                        placeholder={'message'}
                        onChange={(event)=> setMessage(event.target.value)}
                        onKeyPress={(event)=> event.key == "Enter" ? sendMessage(event) : null}
                        />
                </div>
            </div>
        </Fragment>
    )
}

export default Chat