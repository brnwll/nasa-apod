import React from "react";
import styled from "styled-components";

const StyledApodMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img,
  iframe {
    border-radius: 1rem;
    box-shadow: 0px 2px 5px black;
  }
`;

export default function ApodMedia({ srcUrl, title, mediaType }) {
  const image = (
    <StyledApodMedia>
      <img src={srcUrl} alt={title} />
    </StyledApodMedia>
  );
  const video = (
    <StyledApodMedia>
      <iframe
        width="853"
        height="480"
        src={srcUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </StyledApodMedia>
  );

  if (mediaType === "image") return image;
  if (mediaType === "video") return video;
  return <div>Unsupported media type</div>;
}
