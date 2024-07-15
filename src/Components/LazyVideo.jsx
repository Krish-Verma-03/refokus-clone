import React, { useRef, useEffect } from 'react';

const LazyVideo = ({ src, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const onIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 });
    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return <video ref={videoRef} src={src} {...props} />;
};

export default LazyVideo;
