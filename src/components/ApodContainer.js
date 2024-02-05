import React from "react";
import styled, { keyframes } from "styled-components";
import ApodMedia from "./ApodMedia";
import ApodDetails from "./ApodDetails";
import Spinner from "./Spinner";

const fadeIn = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }`;
const StyledApodContainer = styled.div`
  margin-top: 2rem;
  max-width: 960px;
  opacity: 0;
  transform: scale(1.1);
  animation: ${fadeIn} 0.2s ease-in-out forwards;
`;

export default function ApodContainer({ fetchingData, data }) {
  const renderSpinner = () => <Spinner></Spinner>;

  const renderAposComponents = () => (
    <StyledApodContainer>
      <ApodMedia
        srcUrl={data.url}
        title={data.title}
        mediaType={data.media_type}
      ></ApodMedia>
      <ApodDetails
        copyright={data.copyright}
        title={data.title}
        explanation={data.explanation}
      ></ApodDetails>
    </StyledApodContainer>
  );

  return fetchingData ? renderSpinner() : renderAposComponents();
}
