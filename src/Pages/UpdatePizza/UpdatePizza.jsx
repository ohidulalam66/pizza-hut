import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Bar from '../Shared/Bar/Bar'
import Pizza from './Pizza/Pizza'
import swal from 'sweetalert'

const UpdatePizza = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('https://intense-meadow-27803.herokuapp.com/getPizza')
      .then((res) => res.json())
      .then((data) => setPizzas(data))
  }, [])

  const deletePizza = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Do you want to Delete your Pizza?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://intense-meadow-27803.herokuapp.com/deletePizzas/${id}`
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal('Poof! Your Pizza has been Deleted!', {
                icon: 'success',
              })
              const remainingCourses = pizzas.filter(
                (pizza) => pizza._id !== id,
              )
              setPizzas(remainingCourses)
            }
          })
      } else {
        swal('Your Pizza has been Saved!', {
          icon: 'info',
        })
      }
    })
  }
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
              <Pizza key={pizza._id} pizza={pizza} deletePizza={deletePizza} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default UpdatePizza
