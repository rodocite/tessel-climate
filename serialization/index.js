const jsonAPISerializer = require('json-api-serializer')
const Serializer = new jsonAPISerializer()

module.exports = {
  register: Serializer => {
    const resourceList = [
      'temperature'
    ]

    resourceList.forEach(resource => {
      Serializer.register(resource)
    })
  }
}
