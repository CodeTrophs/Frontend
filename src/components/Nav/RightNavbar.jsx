import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  
  li {
    padding: 30px 35px;
  }
    a {
      text-decoration: none;
      color:black;
    }
    a:hover{
      color: #ffaa1d;
      
    }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 120vh;
    width: 300px;
    padding-top: 3.7rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    a {
        text-decoration: none;
        color:black;
        font-size: 1.2rem;
      }
      a:hover{
        color: #ffaa1d;
      }
  }
`;

const RightNavbar = ({ open }) => {
  
  return (
    <Ul open={open}>
      <li><Link href="/feed">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>Home</a>
    </Link></li>
    <li><Link href="/about">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>About Us</a>
            </Link></li>
      <li><Link href="/terms-of-service">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>Terms of Service</a>
    </Link></li>
      <li><Link href="/privacy-policy">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>Privacy policy</a>
    </Link></li>
      
    
    </Ul>
  )
  
}
RightNavbar.propTypes = {
  open: PropTypes.node.isRequired,
  };


export default RightNavbar
