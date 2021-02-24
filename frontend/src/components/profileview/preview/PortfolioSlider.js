import React, { useState } from 'react'
import preview1 from "../../../assets/preview1.png";
import preview2 from "../../../assets/preview2.png";
import preview3 from "../../../assets/preview3.png";
import Carousel from 'react-bootstrap/Carousel'

const PortfolioSlider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
          <div className="image-wrap col-md-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={preview1}

          alt="First slide"
        />
        
      </Carousel.Item>
      </div>
      <div className="image-wrap col-md-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={preview3}
          alt="Second slide"
        />

       
      </Carousel.Item>
      </div>
      <div className="image-wrap col-md-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={preview2}
          alt="Third slide"
        />
      </Carousel.Item>
      </div>
    </Carousel>
  );
}


export default PortfolioSlider
