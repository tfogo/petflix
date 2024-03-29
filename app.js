const mongodb = require('mongodb')
const express = require('express')
const app = express()
app.use(express.static('dist'))

mongodb.MongoClient.connect('mongodb://tim:pass@ds163294.mlab.com:63294/calhacks').then(db => {
  
  let petflix = db.collection('petflix')
  
  app.get('/videos', (req, res) =>
    petflix.find().toArray().then(data => res.send(data))
  )
  
  app.get('/random', (req, res) => {
    petflix.aggregate([{ $sample: { size: 1 } }]).toArray().then(data => {
      res.redirect(`/view/${data[0]._id}`)
    })
  })
  
  app.get('*', (req, res) =>
    res.sendFile(__dirname + '/index.html')
  )

  app.listen(9000)
})
