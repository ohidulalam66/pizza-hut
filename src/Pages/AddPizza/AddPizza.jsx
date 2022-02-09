import React, { useState } from 'react'
import Bar from '../Shared/Bar/Bar'
import './AddPizza.css'
import { useForm } from 'react-hook-form'
import { Container, Form, Stack } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

const AddPizza = () => {
  const [star, setStar] = useState(0)
  const { register, handleSubmit, reset } = useForm()

  const ratingChanged = (newRating) => {
    setStar(newRating)
  }

  const onSubmit = (data) => {
    const newData = { ...data, star }
    if (newData.name && newData.image && newData.price && newData.star) {
      fetch('', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            alert('Congratulation! Your Book Blog Submit success')
            reset()
          } else {
            alert('Sorry! Your Book Blog has not been submitted')
          }
        })
    } else {
      alert('Sorry! Your Book Blog has not been submitted')
    }
  }
  return (
    <>
      <Bar />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <Stack direction="horizontal" className="d-flex align-items-center">
            <h4 className="text-muted">Add Pizza</h4>
            <button
              type="submit"
              className="px-2 py-1 text-uppercase ms-auto submitButton"
            >
              Add
            </button>
          </Stack>
          <Form.Group className="my-4">
            <input
              {...register('name')}
              placeholder="Pizza Name"
              className="py-1 px-4 fw-bolder"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <input
              {...register('image')}
              placeholder="Pizza Image"
              className="py-1 px-4 fw-bolder"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <input
              {...register('price')}
              placeholder="Pizza Price"
              className="py-1 px-4 fw-bolder"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <textarea
              {...register('description')}
              placeholder="Description"
              className="py-1 px-4 fw-bolder"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <h5 className="text-start">Star Rating: </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={50}
              activeColor="#ffd700"
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}

export default AddPizza
