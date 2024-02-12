import type React from 'react';
import VideoPlayer from './VideoPlayer';
import * as movs from "./mov";

const Max: React.FC = () => {
  return (
    <div className="content">
      <VideoPlayer src={movs.main_vid} />
      <VideoPlayer src={movs.asteroid} />
      <VideoPlayer src={movs.kaleid} />
      <VideoPlayer src={movs.doughnut} />
    </div>
  );
}
export default Max;
