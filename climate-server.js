const express = require('express')
const app = express()
const sequelize = require('sequelize')
const bodyParser = require('body-parser')
const jsonAPISerializer = require('json-api-serializer')
const Serializer = new jsonAPISerializer()
const { Temperature } = require('./models')
const serialize = require('./serialization')
const request = require('request')
serialize.register(Serializer)
app.use(bodyParser.json())

app.get('/temperature', (req, res) => {
  Temperature.findAll({})
  .then(temperatureData => {
    const data = temperatureData.map(temperature => temperature.dataValues)

    res.json(Serializer.serialize('temperature', data))
  })
})

app.post('/temperature', (req, res) => {
  const attributes = req.body.data.attributes

  Temperature.create({
    type: 'temperature',
    c: attributes.c,
    f: attributes.f,
    h: attributes.h
  })
  .then(temperature => {
    Temperature.find({ where: { id: temperature.id } })
    .then(data => res.json(Serializer.serialize('temperature', data.dataValues)))
  })
})

app.listen(4000)
