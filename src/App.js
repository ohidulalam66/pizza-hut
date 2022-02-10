import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AddPizza from './Pages/AddPizza/AddPizza'
import UpdatePizza from './Pages/UpdatePizza/UpdatePizza'
import Login from './Pages/Secure/Login/Login'
import EditPizza from './Pages/UpdatePizza/EditPizza/EditPizza'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addPizza" element={<AddPizza />} />
          <Route path="/updatePizza" element={<UpdatePizza />} />
          <Route path="/updatePizza/edit/:id" element={<EditPizza />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
