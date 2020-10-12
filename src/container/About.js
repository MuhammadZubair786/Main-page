import React from 'react'

import {Link} from "react-router-dom";
export default class About extends React.Component{
    gotohome = () =>{
        this.props.history.push('https://muhammadzubair786.github.io/Main-page/')
    }
    render(){
        return(
            <div>
                 <h1>About Page</h1>
                 {/* <Link to='/'>Go To Home Page</Link> */}

                 <button onClick={this.gotohome}>Go To Home</button>
            </div>
           
        )
    }
}