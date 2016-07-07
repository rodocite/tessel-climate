const tessel = require('tessel')
const climatelib = require('climate-si7020')
const express = require('express')
const app = express()

const climate = climatelib.use(tessel.port['A'])

climate.on('ready', () => {
  console.log('Connected to climate module.')

  app.get('/climate', (req, res) => {
    climate.readTemperature('c', (err, temp) => {
      climate.readHumidity((err, humid) => {
        console.log('c:', temp.toFixed(4), 'f:', (temp.toFixed(4) * 1.8 + 32).toFixed(4), 'h:', humid.toFixed(4))

        res.json({
          data : {
            type: 'climate',
            id: Date.now(),
            attributes: {
              c: +temp.toFixed(4),
              f: +(temp.toFixed(4) * 1.8 + 32).toFixed(4),
              h: +humid.toFixed(4)
            }
          }
        })
      })
    })
  })
})

app.listen(8080)
