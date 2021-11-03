import React from 'react';
import Lottie from 'react-lottie';
import loadingAnimation from '../../../../assets/Lottie/LoadingAnimation.json';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Loading;
