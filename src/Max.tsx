import type React from 'react';
import * as movs from "./mov";

const Max: React.FC = () => {
  return (
    <div className="content">
      <div className="video-player">
        <video controls autoPlay loop muted className="custom-video">
          <source src={movs.main_vid} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
      <div className="video-player">
        <video controls autoPlay loop muted className="custom-video">
          <source src={movs.asteroid} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
      <div className="video-player">
        <video controls autoPlay loop muted className="custom-video">
          <source src={movs.kaleid} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
      <div className="video-player">
        <video controls autoPlay loop muted className="custom-video">
          <source src={movs.doughnut} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
    </div>
  );
}
export default Max;
