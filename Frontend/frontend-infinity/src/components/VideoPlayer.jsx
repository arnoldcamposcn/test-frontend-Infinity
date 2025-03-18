import moduleStore from '../store/moduleStore';

export const VideoPlayer = () => {
  const { selectedVideo } = moduleStore();

  return (
    <div className="w-full">
      {selectedVideo && (
        <iframe
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh]"
          
          src={selectedVideo}
          title="Video del curso"
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;