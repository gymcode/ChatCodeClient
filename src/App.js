import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'

//components
import Join from './component/join'
import Chat from './component/chat'

export default function App () {
    return(
        <Router>
            <Route path={'/join'} exact component={Join}/>
            <Route path={'/chat'} exact component={Chat}/>
        </Router>
    )
}