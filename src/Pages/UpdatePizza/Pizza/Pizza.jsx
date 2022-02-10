import React from 'react'
import './Pizza.css'

const Pizza = ({ pizza }) => {
  const { name, image, price, star } = pizza
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>{star}</td>
        <td>
          <img src={image} className="image" alt="" />
        </td>
      </tr>
    </>
  )
}

export default Pizza
