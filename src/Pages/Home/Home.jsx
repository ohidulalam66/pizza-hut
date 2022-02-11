import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Bar from '../Shared/Bar/Bar'
import PizzaDetail from './PizzaDetail'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/getPizza')
      .then((res) => res.json())
      .then((data) => setPizzas(data))
  }, [])
  return (
    <>
      <Bar />
      <Container className="mt-5">
        <h4 className="text-start text-danger">Pizza Menu</h4>
        {pizzas.map((pizza) => (
          <PizzaDetail key={pizza._id} pizza={pizza} />
        ))}
      </Container>
    </>
  )
}

export default Home
