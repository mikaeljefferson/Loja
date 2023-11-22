import React from 'react';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../searchbar/Searchbar';
import './Header.css';



function Header() {
  return (
    <header className="header">
      <div className="container">
      < SearchBar/>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;