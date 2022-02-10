import React, { useState } from 'react'
import Bar from '../Shared/Bar/Bar'
import './AddPizza.css'
import { useForm } from 'react-hook-form'
import { Container, Form, Stack } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import swal from 'sweetalert'

const AddPizza = () => {
  const [star, setStar] = useState('')
  const { register, handleSubmit, reset } = useForm()

  const ratingChanged = (newRating) => {
    setStar(newRating)
  }

  const onSubmit = (data) => {
    const newData = { ...data, star }
    console.log(newData)
    if (newData.name && newData.image && newData.price && newData.star) {
      fetch('http://localhost:5000/addPizza', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            swal('Congratulation!', 'Your Pizza Post Submit', 'success')
            reset()
          } else {
            swal('Sorry!', 'Your Pizza Post has not been submitted', 'error')
          }
        })
    } else {
      swal('Sorry!', 'Your Pizza Post has not been submitted', 'error')
    }
  }
  return (
    <>
      <Bar />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <Stack direction="horizontal">
            <h4 className="text-danger">Add Pizza</h4>
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
