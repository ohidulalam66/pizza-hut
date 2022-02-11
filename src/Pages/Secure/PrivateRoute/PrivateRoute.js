import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useLocation, Navigate } from 'react-router'
import useAuth from '../../Hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth()
  let location = useLocation()
  if (loading) {
    return (
      <Spinner animation="border" variant="success" className="spinnerSize" />
    )
  }
  if (user.email) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} />
}

export default PrivateRoute
