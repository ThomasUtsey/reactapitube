import React from "react";
import "./videoDetail.css";

const VideoDetail = ({ video }) => {
  console.log("vid detail", video);
  if (video !== null) {
    const embedUrl = `https://youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="ui segment video-detail">
        <div className="ui embed video">
          <iframe
            title="Video Player"
            src={embedUrl}
            frameBorder="2"
            allowfullscreen="true"
          ></iframe>
        </div>

        <h4 className="ui header"> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    );
  }

  return <h2>Please search for a video to play</h2>;
};

export default VideoDetail;
