import { createContext, useContext, useState } from "react";

const ImageSizeContext = createContext();

export function ImageSizeProvider({ children }) {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <ImageSizeContext.Provider value={{ imageSize, isLarge, setIsLarge }}>
      {children}
    </ImageSizeContext.Provider>
  );
}

export function useImageSize() {
  return useContext(ImageSizeContext);
}
