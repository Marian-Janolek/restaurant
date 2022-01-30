import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app-navbar-links">
        <li className="p-opensans">
          <a href="#home">home</a>
        </li>
        <li className="p-opensans">
          <a href="#about">about</a>
        </li>
        <li className="p-opensans">
          <a href="#menu">menu</a>
        </li>
        <li className="p-opensans">
          <a href="#awards">awards</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="app-navbar-login">
        <a href="#login" className="p-opensans">
          log in / register
        </a>
        <div />
        <a href="/" className="p-opensans">
          book a table
        </a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-smallscreen-links">
              <li className="p-opensans">
                <a href="#home">home</a>
              </li>
              <li className="p-opensans">
                <a href="#about">about</a>
              </li>
              <li className="p-opensans">
                <a href="#menu">menu</a>
              </li>
              <li className="p-opensans">
                <a href="#awards">awards</a>
              </li>
              <li className="p-opensans">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
