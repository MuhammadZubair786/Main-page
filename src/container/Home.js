import React from 'react'
import {Link} from "react-router-dom";

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Home Page</h1>
            <Link to='https://muhammadzubair786.github.io/Main-page/about'>Go To About  Page</Link>
            </div>
            
        )
    }
}