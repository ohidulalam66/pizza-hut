import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AddPizza from './Pages/AddPizza/AddPizza'
import UpdatePizza from './Pages/UpdatePizza/UpdatePizza'
import Login from './Pages/Secure/Login/Login'
import Register from './Pages/Secure/Register/Register'
import EditPizza from './Pages/UpdatePizza/EditPizza/EditPizza'
import AuthProvider from './Pages/Shared/Context/AuthProvider/AuthProvider'
import PrivateRoute from './Pages/Secure/PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/addPizza"
              element={
                <PrivateRoute>
                  <AddPizza />
                </PrivateRoute>
              }
            />
            <Route
              path="/updatePizza"
              element={
                <PrivateRoute>
                  <UpdatePizza />
                </PrivateRoute>
              }
            />
            <Route
              path="/updatePizza/edit/:id"
              element={
                <PrivateRoute>
                  <EditPizza />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
