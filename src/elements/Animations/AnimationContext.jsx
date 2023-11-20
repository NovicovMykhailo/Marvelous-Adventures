import { createContext, useState } from 'react';

export const AnimationContext = createContext();

const AnimationProvider = ({ children }) => {
  const [shouldAnimationPlay, setShouldAnimationPlay] = useState(false);

  const animationPlayState = (param) => {
    setShouldAnimationPlay(param);
  };

  return (
    <AnimationContext.Provider
      value={{
        setIsAnimationShouldPlay: (param) => animationPlayState(param),
        animationState: shouldAnimationPlay,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
