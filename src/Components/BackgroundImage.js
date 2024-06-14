import React from 'react'
import { useLocation } from 'react-router-dom'

const BackgroundImage = () => {
  const location = useLocation();

  const thisIndex = () => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/projects':
      case '/contact':
        return 1;
      default:
        return 0;
    }
  };

  const projectIndex = () => {
    switch (location.pathname) {
     
      case '/projects':
        return 1;
      default:
        return 0;
    }
  };

  const newSecond = projectIndex();
  const newOne = thisIndex();

  return (
    <div className={`background-image ${newOne === 1 ? 'newActive' : ''} ${newSecond === 1 ? 'newSecondActive' : ''}`}>
    </div>
  )
}

export default BackgroundImage;
