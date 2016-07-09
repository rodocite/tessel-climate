const tessel = require('tessel')
const climatelib = require('climate-si7020')
const request = require('request')
const climate = climatelib.use(tessel.port['A'])

climate.on('ready', () => {
  console.log('Connected to climate module.')

  setImmediate(function loop () {
    climate.readTemperature('f', function (err, temp) {
      climate.readHumidity(function (err, humid) {
        console.log('c:', temp.toFixed(4), 'f:', (temp.toFixed(4) * 1.8 + 32).toFixed(4), 'h:', humid.toFixed(4))

        request.post({
          headers: {
            'content-type': 'application/json'
          },
          url: 'http://192.168.1.240:4000/temperature',
          json: {
            data : {
              type: 'temperature',
              attributes: {
                c: +temp.toFixed(4),
                f: +(temp.toFixed(4) * 1.8 + 32).toFixed(4),
                h: +humid.toFixed(4)
              }
            }
          }
        })

        setTimeout(loop, 300000)
      })
    })
  })
})
