import React from 'react';
import styled from 'styled-components';

import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 10px 1px;
  }
  .header-logo {
    position: relative;
    margin-top: 7px;
    height: 80px;
    width: auto;
    cursor: pointer;
  }
  @media (max-width: 768px) {
      padding-left: 1px;
      height: 80px;
      .logo {
        padding: 10px 0px;
      }
    .header-logo {
        position: relative;
        margin-top: 4px;
        height: 70px;
        width: auto;
        cursor: pointer;
        padding-left: 0px;
      }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img className='header-logo' src="/logo/codetrophs.png" alt="" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
