import React, { useState } from 'react'
import './Login.css'
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
        <div className="mx-auto">
          <img
            className="logo-url"
            src="https://i.ibb.co/k0kDnJP/logo.png"
            alt=""
          />
        </div>
        <h5 className="text-start">Login</h5>
        <Form onSubmit={handleLoginSubmit}>
          <Form.Control
            className="mb-3"
            onBlur={handleOnBlur}
            type="email"
            name="email"
            placeholder="Your Email*"
          />
          <Form.Control
            className="mb-3"
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
        <br />
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
        <br />
        <Link className="text-success my-2" to="/register">
          New User? Please, Register
        </Link>
      </Container>
    </>
  )
}

export default Login
