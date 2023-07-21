import React from 'react'
import headerImg from "./image/authors.jpeg"

function Header() {
  return (
    <div>
      <div className='img-div'>
      <img src={headerImg} alt="header-img" className="header-img" />
      </div>
          <h1 className='header-title'> Beko Quotes Server</h1>
    </div>
  );
}

export default Header;