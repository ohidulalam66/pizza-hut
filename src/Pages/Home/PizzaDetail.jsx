import React from 'react'
import { Col, Row } from 'react-bootstrap'

const PizzaDetail = ({ pizza }) => {
  const { name, price, image, star, description } = pizza
  return (
    <>
      <Row className="border border-light-3 p-2 m-2">
        <Col xs={12} md={6} className="text-start">
          <h2>{name}</h2>
          <h5>{price}</h5>
          <p>{star}</p>
          <p>{description}</p>
        </Col>
        <Col xs={12} md={6}>
          <img src={image} alt="" className="w-75" />
        </Col>
      </Row>
    </>
  )
}

export default PizzaDetail
