import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AddPizza from './Pages/AddPizza/AddPizza'
import Bar from './Pages/Shared/Bar/Bar'
import UpdatePizza from './Pages/UpdatePizza/UpdatePizza'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addPizza" element={<AddPizza />} />
          <Route path="/updatePizza" element={<UpdatePizza />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  )
}

export default App
