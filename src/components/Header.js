import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiSun, BiMoon, BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";



const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  const [category, setCategory] = useState("all");
  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode)
  }, [darkMode]);

  const {
    isEmpty,
    totalItems,
  } = useCart();


  const handleSelect = (event) => {
    const cat = event.target.value;
    setCategory(cat);

    // take copy of the state




    // give the copy to setState

  }
  return (
    <Navbar collapseOnSelect expand="md"
      variant={darkMode ? 'dark' : 'light'}
      className={darkMode ? 'bg-light-black border-bottom' : 'bg-light border-bottom'}
      style={{ width: '100%', position: 'fixed', zIndex: 100 }}
    >
      <Container className='mx-2'>
        <Link to="/">
          <Navbar.Brand className={darkMode ? 'text-dark-primary' : 'text-light-primary'}>
            <b>Products</b>
            <select onChange={handleSelect} value={category}>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewellery</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="sign-in" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              Sign in
            </Link>
            <Link to="contact-us" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              Contact us
            </Link>
            <Nav.Link
              className={darkMode ? 'text-dark-primary' : 'text-light-primary'}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/cart"
              className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}
            >
              <BiCart size="2rem" />
              {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
              <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Cart</span>
            </Link>
            <Link to="my-account" className={`nav-link ${darkMode ? 'text-dark-primary' : 'text-light-primary'}`}>
              <VscAccount size="1.8rem" />
              &nbsp;My Account
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;