import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';

import { logout } from '../../api/authFunctions';
import NavbarBasic from '../Nav/Navbar';
import ToTop from '../ToTop';
import UserContext from '../UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  const router = useRouter();
  const { User, setUser } = useContext(UserContext);


  async function handleLogout(e) {
    e.preventDefault();
    logout();
    setUser(null);
    router.push('/');
  }
  return (
    <>
      <ToTop />
      {User &&
      router.pathname !== '/' &&
      router.pathname !== '/toporg' &&
      router.pathname !== '/toplang' ? (
        <Navbar
          style={{ backgroundColor: '#0c314a' }}
          expand="lg"
          variant="dark"
          className="d-flex justify-content-between py-2">
          <Navbar.Brand>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
              className="text-white text-decoration-none"
              href="/">
              <img
                alt=""
                src="/logo/codetrophs.png"
                width="70"
                height="70"
                className="d-inline-block align-top img-fluid"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="px-lg-5">
                <Link className="text-white text-decoration-none" href="/feed">
                  <p className="text-white text-decoration-none my-lg-3">
                    FEED
                  </p>
                </Link>
                {router.pathname === '/feed' && (
                  <hr
                    className="mx-auto"
                    style={{
                      height: '1px',
                      width: '50px',
                      backgroundColor: '#fff',
                      border: 'none'
                    }}
                  />
                )}
              </Nav.Link>
              <Nav.Link className="px-lg-5">
                <Link
                  className="text-white text-decoration-none"
                  href="/organizations">
                  <p className="text-white text-decoration-none my-lg-3">
                    ORGANIZATIONS
                  </p>
                </Link>
                {router.pathname === '/organizations' && (
                  <hr
                    className="mx-auto"
                    style={{
                      height: '1px',
                      width: '50px',
                      backgroundColor: '#fff',
                      border: 'none'
                    }}
                  />
                )}
              </Nav.Link>
              <Nav.Link className="px-lg-5">
                <Link
                  className="text-white text-decoration-none"
                  href="/saved-repositories">
                  <p className="text-white text-decoration-none my-lg-3">
                    SAVED REPOSITORIES
                  </p>
                </Link>
                {router.pathname === '/saved' && (
                  <hr
                    className="mx-auto"
                    style={{
                      height: '1px',
                      width: '50px',
                      backgroundColor: '#fff',
                      border: 'none'
                    }}
                  />
                )}
              </Nav.Link>
              <Nav.Link className="px-lg-5">
                <Link
                  className="text-white text-decoration-none"
                  href="/starred">
                  <p className="text-white text-decoration-none my-lg-3">
                    STARRED REPOSITORIES
                  </p>
                </Link>
                {router.pathname === '/starred' && (
                  <hr
                    className="mx-auto"
                    style={{
                      height: '1px',
                      width: '50px',
                      backgroundColor: '#fff',
                      border: 'none'
                    }}
                  />
                )}
              </Nav.Link>
            </Nav>

            <Dropdown className="mr-4">
              <Dropdown.Toggle
                style={{
                  backgroundColor: 'transparent',
                  outline: 'none',
                  border: 'none',
                  alignItems: 'center'
                }}
                className="d-flex mx-auto align-middle"
                id="dropdown-basic">
                <div
                  style={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%'
                  }}>
                  <img
                    alt=""
                    src={
                      User !== null && User.profileImageUrl
                        ? User.profileImageUrl
                        : '/SVG/user.svg'
                    }
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/SVG/user.svg';
                    }}
                    className="d-inline-block align-top img-fluid p-1"
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <div style={{ width: '100px' }}>
                  {User !== null && <strong> {User.name} </strong>}
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ left: '50%', transform: 'translateX(-50%)' }}
                className="mt-2">
                <Dropdown.Item href="#/action-1">
                  <Link href="/profile">
                    <Button className="w-100" variant="success">
                      My Profile
                    </Button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link href="/setting">
                    <Button className="w-100" variant="outline-secondary">
                      Settings
                    </Button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Button
                    className="w-100"
                    variant="danger"
                    type="button"
                    onClick={handleLogout}>
                    Log out
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <NavbarBasic />
      )}
    </>
  );
};

export default NavbarComponent;
