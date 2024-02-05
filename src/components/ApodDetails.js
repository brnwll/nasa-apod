import React from "react";
import styled, { keyframes } from "styled-components";

// it takes a second for the image to render after being fetched
// to avoid the image details being flashed upon the screen
// delay the details from being displayed immediately
const delayedFadeIn = keyframes`
  0% { opacity: 0; }
  70% { opacity: 0; }
  100% { opacity: 1; }`;

const StyledApodDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.25rem 0;
  border-left: 1px solid #dadfe1;
  border-right: 1px solid #dadfe1;
  border-bottom: 1px solid #dadfe1;
  border-radius: 1rem;
  box-shadow: 0px 2px 5px black;
  overflow: hidden;
  animation: ${delayedFadeIn} 0.5s ease-in forwards;
  .authorAndTitle {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #dadfe1;
    h2 {
      color: black;
    }
    h2::before {
      content: "©";
    }
  }
  .explanation {
    padding: 1rem;
    background-color: white;
  }
`;

export default function ApodDetails({ copyright, title, explanation }) {
  return (
    <StyledApodDetails>
      <div className="authorAndTitle">
        {copyright ? <h2>{copyright}</h2> : <div>---</div>}
        <h3>{title}</h3>
      </div>
      <p className="explanation">{explanation}</p>
    </StyledApodDetails>
  );
}
