import React from "react";
import "./ApodMedia.css";

export default function ApodMedia({ srcUrl, title, mediaType }) {
  const image = (
    <div id="apod-media-wrapper">
      <img src={srcUrl} alt={title} />
    </div>
  );
  const video = (
    <div id="apod-media-wrapper">
      <iframe
        width="853"
        height="480"
        src={srcUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );

  if (mediaType === "image") return image;
  if (mediaType === "video") return video;
  return <div>Unsupported media type</div>;
}
