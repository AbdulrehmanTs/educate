import React from "react";
import video from "../../assets/video/video1.mp4";
import "./video.css"

const Video = () => {
  return (
    <section className="py-[50px] lg:py-[70px] bg-gray overflow-hidden">
      <div className="container py-[30px] h-[100%]">
        <div className="w-[100%] flex justify-center items-center pt-[50%] relative">
          <iframe src="https://www.youtube.com/embed/tgxqmK2eoec?list=PLXyIamz14kHVYRPLqhQCbPEmnmZxQJ6iJ&autoplay=1&mute=1&loop=1" className="absolute top-0 left-0 bottom-0 right-0 w-[100%] h-[100%] rounded-[10px] drop-shadow-2xl" frameBorder="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
