import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Rating from 'react-rating'

const PizzaDetail = ({ pizza }) => {
  const { name, price, image, star, description } = pizza
  return (
    <>
      <Row className="border border-light-3 p-2 m-2">
        <Col xs={12} md={6} className="text-start">
          <h2 className="fw-bold">{name}</h2>
          <h5>Price: ${price}</h5>
          <Rating
            initialRating={star}
            className="star-rating"
            readonly
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
          />
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
