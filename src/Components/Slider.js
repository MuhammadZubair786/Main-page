import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="d-block w-100" alt="..."  height='500px'/>
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/68/29/29/68292919de76b5f4866c52c37df1abc6.jpg" className="d-block w-100" alt="..." height='500px'/>
          </div>
          <div className="carousel-item">
            <img src="https://wallup.net/wp-content/uploads/2016/01/231343-Ferrari-car-748x468.jpg" className="d-block w-100" alt="..."  height='500px'/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
            </div>
        )
    }
}

export default Slider;