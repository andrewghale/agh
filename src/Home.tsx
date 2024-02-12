import type React from 'react';
import * as images from "./img";


const Home: React.FC = () => {
  return (
    <div className="content">
    <div className="row">
      <div className="img-div">
        <img className="hover-zoom" src={images.home} alt="image" />
      </div>
      <div className="img-div">
        <img className="hover-zoom" src={images.home2} alt="image" />
      </div>
      <div className="img-div">
        <img className="hover-zoom" src={images.home3} alt="image" />
      </div>
    </div>
    <div className="row">
      <div className="img-div">
        <img className="hover-zoom" src={images.home4} alt="image" />
      </div>
      <div className="img-div">
        <img className="hover-zoom" src={images.home5} alt="image" />
      </div>
      <div className="img-div">
        <img className="hover-zoom" src={images.home6} alt="image" />
      </div>
    </div>
  </div>
  );
}

export default Home;
