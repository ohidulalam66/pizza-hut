/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Bar from '../../Shared/Bar/Bar'

const EditPizza = () => {
  const { id } = useParams()
  const [editPizza, setEditPizza] = useState({})

  useEffect(() => {
    const url = `http://localhost:5000/getPizza/${id}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEditPizza(data))
  }, [])

  // edit name change
  const nameChange = (e) => {
    const editName = e.target.value
    const updatePizza = { ...editPizza }
    updatePizza.name = editName
    setEditPizza(updatePizza)
  }

  // edit image change
  const imageChange = (e) => {
    const editImage = e.target.value
    const updatePizza = { ...editPizza }
    updatePizza.image = editImage
    setEditPizza(updatePizza)
  }

  // edit price change
  const priceChange = (e) => {
    const editPrice = e.target.value
    const updatePizza = { ...editPizza }
    updatePizza.price = editPrice
    setEditPizza(updatePizza)
  }

  // edit description change
  const descriptionChange = (e) => {
    const editDescription = e.target.value
    const updatePizza = { ...editPizza }
    updatePizza.description = editDescription
    setEditPizza(updatePizza)
  }

  // edit star change
  const starChange = (e) => {
    const editStar = e.target.value
    const updatePizza = { ...editPizza }
    updatePizza.star = editStar
    setEditPizza(updatePizza)
  }

  const editPizzaHandle = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Bar />
      <Container className="mt-5">
        <h4 className="text-start text-danger">Edit Pizza</h4>
        <Row>
          <Col className="text-start">
            <h3>{editPizza?.name}</h3>
            <img src={editPizza?.image} className="w-75" alt="" />
            <h5>Price: ${editPizza?.price}</h5>
            <h5>Rating: {editPizza?.star}⭐</h5>
            <h6>{editPizza?.description}</h6>
          </Col>
          <Col>
            <Form onSubmit={editPizzaHandle}>
              <Form.Group className="my-4">
                <input
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={nameChange}
                  value={editPizza?.name || ''}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={imageChange}
                  value={editPizza?.image || ''}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="number"
                  className="py-1 px-4 fw-bolder"
                  onChange={priceChange}
                  value={editPizza?.price || ''}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <textarea
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={descriptionChange}
                  value={editPizza?.description || ''}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <select
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={starChange}
                  value={editPizza?.star}
                >
                  <option value="5">5 Ratings</option>
                  <option value="4">4 Ratings</option>
                  <option value="3">3 Ratings</option>
                  <option value="2">2 Ratings</option>
                  <option value="1">1 Rating</option>
                </select>
              </Form.Group>
              <button
                type="submit"
                className="px-2 py-1 text-uppercase ms-auto submitButton"
              >
                Edit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditPizza
