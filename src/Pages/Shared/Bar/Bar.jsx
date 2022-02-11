import React from 'react'
import './Bar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const Bar = () => {
  const { user, logOut } = useAuth()
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        className="text-uppercase w-75 mx-auto mt-2 rounded sticky-top"
      >
        <Container>
          <Link to="/home" className="logo">
            <img
              src="https://i.ibb.co/k0kDnJP/logo.png"
              className="symbol"
              alt=""
            />
            <h3>Pizza HUT</h3>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <NavLink
                to="/addPizza"
                className="mx-3 px-2 py-1 rounded menuBar"
              >
                Add Pizza
              </NavLink>
              <NavLink
                to="/updatePizza"
                className="mx-3 px-2 py-1 rounded menuBar"
              >
                Update Pizza
              </NavLink>
              <span className="mx-3 px-2 py-1 rounded menuBar" onClick={logOut}>
                log out
              </span>
              <div className="d-flex align-items-center">
                {user.photoURL ? (
                  <img className="userPic mx-3" src={user?.photoURL} alt="" />
                ) : (
                  <p className="text-light px-2 py-1">{user?.displayName}</p>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Bar
