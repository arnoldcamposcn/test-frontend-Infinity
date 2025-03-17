import { useParams } from 'react-router-dom';
import moduleStore from '../store/moduleStore';

export const VideoPlayer = () => {
  const { videoId } = useParams();
  const { selectedVideo } = moduleStore();

  return (
    <div className="w-full">
      {selectedVideo && (
        <iframe
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:w-[1568px] lg:max-h-[832px]"
          src={selectedVideo}
          title={`Video ${videoId}`}
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;