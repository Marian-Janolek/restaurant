import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import { useRef, useState } from 'react';

import './Intro.css';

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app-video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className="app-video-overlay flex-center">
        <div
          className="app-video-overlay-circle flex-center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
