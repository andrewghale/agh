import type React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="video-player">
      <video controls autoPlay loop muted className="custom-video">
        <source src={src} type="video/mp4" />
        Your browser does not support the video element.
      </video>
    </div>
  );
}

export default VideoPlayer;
