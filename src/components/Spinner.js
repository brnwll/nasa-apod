import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  100% { opacity: 1; }`
const rotatePlanent = keyframes`
  100% { transform: rotate(360deg); }`
const StyledSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 0.1s ease-in-out forwards;
  .planet {
    width: 4rem;
    height: 4rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    border-radius: 2rem;
    background: rgb(174,222,238);
    background: radial-gradient(circle, rgba(174,222,238,1) 0%, rgba(81,144,212,1) 100%);
    animation: ${rotatePlanent} 3s linear infinite forwards;
  }
  .moon {
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    background: linear-gradient(white, GhostWhite);
    box-shadow: 2px 2px 5px black;
  }
  .loading {
    color: white;
    opacity: 70%;
    animation: ${fadeIn} 0.5s ease-in-out alternate infinite;
  }
`

export default function Spinner() {
  return (
    <StyledSpinner>
      <div className="planet">
        <div className="moon"></div>
      </div>
      <p className="loading">Loading Photo</p>
    </StyledSpinner>
  )
}