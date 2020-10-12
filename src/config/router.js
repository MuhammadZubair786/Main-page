import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from '../container/Home'
import About from '../container/About'


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route path='https://muhammadzubair786.github.io/Main-page/about' component={About}/>
                <Route exact path='https://muhammadzubair786.github.io/Main-page/' component={Home}/>

            </Router>
        )
    }
}

export default AppRouter;