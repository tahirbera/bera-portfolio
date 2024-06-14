import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();

  const getActiveIndex = () => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/projects':
        return 1;
      case '/contact':
        return 2;
      default:
        return 0;
    }
  };

  const newNum = getActiveIndex();

  return (
    <div className='header-section'>
      <ul className='header-ul'>
        <li className={`${newNum === 0 ? 'active' : ''}`}>
          <Link to='/'>About Me</Link>
        </li>
        <li className={`${newNum === 1 ? 'active' : ''}`}>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className={`${newNum === 2 ? 'active' : ''}`}>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
