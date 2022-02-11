import React, { useState } from 'react'
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'

const Register = () => {
  const { user, registerUser, loading, error } = useAuth()
  const [RegisterData, setRegisterData] = useState({})

  const navigate = useNavigate()

  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newRegisterData = { ...RegisterData }
    newRegisterData[field] = value
    console.log(newRegisterData)
    setRegisterData(newRegisterData)
  }

  const handleRegisterSubmit = (e) => {
    if (RegisterData.password !== RegisterData.password2) {
      ;<Alert variant="danger">Wrong! Did not Your Password Match.</Alert>
      return
    }
    registerUser(
      RegisterData.name,
      RegisterData.email,
      RegisterData.password,
      navigate,
    )
    e.preventDefault()
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
        <h5 className="text-start">Register</h5>
        <Form onSubmit={handleRegisterSubmit}>
          <Form.Control
            className="mb-3"
            onBlur={handleOnBlur}
            type="name"
            name="name"
            placeholder="Your Name*"
          />
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
          <Form.Control
            className="mb-3"
            onBlur={handleOnBlur}
            type="password"
            name="password2"
            placeholder="Re-Password*"
          />
          <Button
            variant="btn btn-outline-success"
            className="my-3"
            type="submit"
          >
            REGISTER
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

        <Link className="text-success my-3" to="/login">
          Already Register? Please, Login
        </Link>
      </Container>
    </>
  )
}

export default Register
