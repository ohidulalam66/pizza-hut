import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Bar from '../Shared/Bar/Bar'
import Pizza from './Pizza/Pizza'

const UpdatePizza = () => {
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
        <h4 className="text-start text-danger">Update Pizza</h4>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map((pizza) => (
              <Pizza key={pizza._id} pizza={pizza} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default UpdatePizza
