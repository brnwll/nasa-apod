export const cssStars = (count) => {
  let backgroundImage = "";
  let size = "";
  let position = "";
  for (let i = 0; i < count; i++) {
    const starSize = Math.random() * 3;
    const starRadiance = Math.random() * 0.15;
    backgroundImage += `
      radial-gradient(white,
      rgba(255, 255, 255, ${starRadiance}) ${starSize}px,
      transparent 20px
    ),`;
    size += `1000px 1000px,`;
    const posX = Math.floor(Math.random() * 1000);
    const posY = Math.floor(Math.random() * 1000);
    position += `${posX}px ${posY}px,`;
  }
  const css = `
    background-image: ${backgroundImage.slice(0, -1)};
    background-size: ${size.slice(0, -1)};
    background-position: ${position.slice(0, -1)};
  `;
  return css;
};
