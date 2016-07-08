# Simple Climate Server API and Client using Tessel2 + Climate Module
Run the server and point climate-client.js to the server IP. The Tessel will regularly report back with readings.

### Tessel 2
```
$ npm install
$ t2 run climate-client.js
$ t2 push climate-client.js (if you want to have it run on your Tessel untethered)
```
### Server
```
$ brew install postgres
$ createdb tessel_data (remember to change the user in db.config.js)
$ npm install
$ node climate-server.js
```


## Data Shape
```json
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": {
    "type": "temperature",
    "id": 7,
    "attributes": {
      "type": "temperature",
      "c": 28.0326,
      "f": 82.4587,
      "h": 60.5627,
      "createdAt": "2016-07-08T00:59:56.506Z",
      "updatedAt": "2016-07-08T00:59:56.506Z"
    }
  }
}
```
