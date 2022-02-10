import React from 'react'
import './Pizza.css'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEdit2 } from 'react-icons/fi'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pizza = ({ pizza, deletePizza }) => {
  const { _id, name, image, price, star } = pizza
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>{star}</td>
        <td>
          <img src={image} className="image" alt="" />
        </td>
        <td>
          <Link to={`/updatePizza/edit/${_id}`}>
            <Button variant="outline-danger">
              <FiEdit2 />
            </Button>
          </Link>
          <Button variant="outline-danger">
            <RiDeleteBin7Line onClick={() => deletePizza(_id)} />
          </Button>
        </td>
      </tr>
    </>
  )
}

export default Pizza
