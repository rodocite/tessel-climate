# Simple Climate API using Tessel2 + Climate Module
```
$ npm install
$ t2 run climate-server.js
$ t2 push climate-server.js (if you want to have it run on your Tessel untethered)
$ t2 wifi (find your Tessel's IP)
$ open http://[your ip addres here]:8080/climate (should open a browser and hit the API for a climate reading)
```
## Data Shape
```json
data: {
  type: "climate",
  id: 1467931066913,
  attributes: {
      c: 30.8212,
      f: 87.4782,
      h: 51.3311
    }
  }
}
```
