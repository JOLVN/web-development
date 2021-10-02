const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 7000
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const data = require('./data.json')

app.use(bodyParser.json())
app.use(cors())


/*
PRODUCTS
*/

// let products = [
//   {
//     id: uuidv4(),
//     name: 'USB Charger',
//     manufacturer: 'Apple',
//     category: 'Electronic',
//     description: 'Lightning charger compatible with Iphone and Ipad.',
//     price: '30€'
//   },
//   {
//     id: uuidv4(),
//     name: 'Apple',
//     manufacturer: 'Prisma',
//     category: 'Food',
//     description: 'Green apple',
//     price: '0,30€'
//   },
// ]

let products = data.items


app.get('/', (req, res) => {
  res.send('Get some products, users or purchases.')
})


// Get all products
app.get('/products', (req, res) => {
  res.json(products);
})


// Get single product
app.get('/products/:id', (req, res) => {
  const result = products.find(product => product.id === req.params.id)
  res.json(result);
})


// Create new product
app.post('/products', (req, res) => {
  products.push({
    id: uuidv4(),
    name: req.body.name,
    author: req.body.author,
    type: req.body.type,
    category: req.body.category,
    description: req.body.description,
    isAvailable: true,
    price: req.body.price,
    image: req.body.image
  })
})


// Delete a product
app.delete('/products/:id', (req, res) => {
  const result = products.findIndex(p => p.id === req.params.id)

  if (result !== -1) {
    products.splice(result, 1)
    res.send('Delete succeded')
  } else {
    res.send('No such product found')
  }
})


// Modify a product
app.put('/products/:id', (req, res) => {
  const result = products.find(product => product.id === req.params.id)

  
  for (let index = 0; index < products.length; index++) {
    let newProduct = {
      id: req.params.id,
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price
    }


    const singleProduct = products[index];

    if (singleProduct.id == req.params.id) {
      products[index] = newProduct
      console.log('change');
    }
  }

  console.log(products);
  res.json(result);

})


/*
USERS
*/


let users = [
  {
    id: uuidv4(),
    name: 'John',
    surname: 'Doe',
    address: 'Tutkijantie 2',
    city: 'Oulu',
    country: 'Finland'
  }
]


// Create user
app.post('/users', (req, res) => {
  products.push({
    id: uuidv4(),
    name: req.body.name,
    surname: req.body.surname,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
  })

})



/*
Purchase
*/
let purchases = [
  {
    id: uuidv4(),
    user_id: uuidv4(),
    product_id: uuidv4(),
  }
]


app.get('/purchases', (req, res) => {
  res.json(purchases);
})


// Get invoices of a user
app.get('/purchases', (req, res) => {

  res.json(purchases);
})


 

app.listen(port, () => {
  console.log(`Product app listening at http://localhost:${port}`)
})