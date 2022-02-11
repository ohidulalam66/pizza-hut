import React, { useState } from 'react'
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  const [logInData, setLogInData] = useState({})

  const { user, loginUser, signInWithGoogle, loading, error } = useAuth()

  const location = useLocation()
  const navigate = useNavigate()

  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...logInData }
    newLoginData[field] = value
    setLogInData(newLoginData)
  }

  const handleLoginSubmit = (e) => {
    loginUser(logInData.email, logInData.password, location, navigate)
    e.preventDefault()
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate)
  }
  return (
    <>
      <Container>
        <p className="topMargin text-danger"></p>
        <h2 className="all-heading">Login</h2>
        <Form onSubmit={handleLoginSubmit}>
          <p className="text-start">
            <i className="fas fa-envelope icon"></i>
          </p>
          <Form.Control
            onBlur={handleOnBlur}
            type="email"
            name="email"
            placeholder="Your Email*"
          />
          <p className="text-start">
            <i className="fas fa-unlock-alt icon"></i>
          </p>
          <Form.Control
            onBlur={handleOnBlur}
            type="password"
            name="password"
            placeholder="Password*"
          />
          <Button
            type="submit"
            variant="btn btn-outline-success"
            className="my-3"
          >
            LOGIN
          </Button>
        </Form>

        {loading && (
          <Spinner
            animation="border"
            variant="success"
            className="spinnerSize"
          />
        )}

        {user.email && (
          <Alert className="my-3 fontSize" variant="success">
            Congress! Created Register Successfully.
          </Alert>
        )}

        {error && (
          <Alert className="my-3 fontSize" variant="danger">
            {error}
          </Alert>
        )}
        <Button
          className="google-btn"
          variant="btn btn-outline-danger"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle /> Sign In Google
        </Button>
        <Link className="text-decoration-none link-hover" to="/register">
          <Button variant="btn btn-outline-dark">
            New User? Please, Register
          </Button>
        </Link>
      </Container>
    </>
  )
}

export default Login
