import React from 'react';

const VideoPlayer = () => {
  return (
    <div className=' max-w-[50%] mx-auto mt-5'>
      
      <video controls style={{ width: '100%', height: 'auto' }}>
        <source src="video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;