import React from 'react';
import logo from './logo.svg';
import Header from './Components/header'
import Slider from './Components/Slider'
import Card from './Components/Card'
import Footer from './Components/Footer'
import './App.css';
import AppRouter from './config/router'


class App extends React.Component {
  // constructor(){
  //   super()
    
  // }
  render() {
    return (
      <div>
        <AppRouter/>
          <Header />
        <Slider />
        <br />
        <br />

        <div className='container-fluid'>
          <div className='row' >
            <Card img='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            <Card img='https://i.pinimg.com/originals/68/29/29/68292919de76b5f4866c52c37df1abc6.jpg' />
            <Card img='https://wallup.net/wp-content/uploads/2016/01/231343-Ferrari-car-748x468.jpg' />
            <Card img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMypfLoygdJ-nsYPtHA4N48y8g3w43XbmTKw&usqp=CAU' />
            <Card img='https://cdn.wallpapersafari.com/94/33/Pi1NE9.jpg' />
            <Card img='https://images7.alphacoders.com/390/390609.jpg' />
            <br />
            <br />
           

          </div>
          <br />
          <br />
          </div>
           
          <Footer/>
        
      </div>
    )
  }
}

export default App;
