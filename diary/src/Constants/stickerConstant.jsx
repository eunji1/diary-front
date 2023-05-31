const STICKER_CONST = {
  IMG_SIZE_OBJECT: (width, height, x, y) => ({
    width: `${width}px`,
    height: `${height}px`,
    transform: `translate(${x}px, ${y}px)`,
  }),
  POSITION_TRANSLATOR: (position) => `translate(${position.positionX}px, ${position.positionY}px)`,
};

export default STICKER_CONST;
