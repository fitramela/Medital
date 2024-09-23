import { WiDaySunny, WiHail, WiStrongWind } from "react-icons/wi";
import React from 'react';


const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_h-cKFhsb-5V1lTXXN0iUDNgMCkQDEENPg&s" alt="logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <h1 className='Medital' style={{ margin: 0,  color: 'white'}}> Medital</h1>
      </div>
      <nav>
        <ul style={navStyle}>
          <li><a href="/"><WiDaySunny /></a></li>
          <li><a href="/about"><WiHail /> </a></li>
          <li><a href="/contact"><WiStrongWind /></a></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '15px',
};

export default Header;
