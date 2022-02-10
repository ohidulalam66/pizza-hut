const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb')
require('dotenv').config()
// const ObjectId = require('mongodb').ObjectId
// const { ObjectID } = require('bson')

const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.5qzra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function run() {
  try {
    await client.connect()
    const database = client.db('pizza-HUT')
    const pizzaCollection = database.collection('pizza')

    // POST Add Courses
    app.post('/addPizza', async (req, res) => {
      const pizza = req.body
      const result = await pizzaCollection.insertOne(pizza)
      res.json(result)
    })

    // GET all Orders API
    app.get('/getPizza', async (req, res) => {
      const cursor = pizzaCollection.find({})
      const pizzas = await cursor.toArray()
      res.send(pizzas)
    })

    // DELETE single Order API
    // app.delete('/books/:id', async (req, res) => {
    //   const id = req.params.id
    //   const query = { _id: ObjectId(id) }
    //   const result = await booksCollection.deleteOne(query)
    //   res.json(result)
    // })
  } finally {
    // await client.close();
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Pizza HUT server Running')
})

app.listen(port, () => {
  console.log(`Pizza HUT server Running:${port}`)
})
