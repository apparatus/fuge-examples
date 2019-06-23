var express = require('express')
var router = express.Router()
var helper = require('../helper')()


router.get('/', function (req, res, next) {
  res.render('add', { first: 0, second: 0, result: 0 })
})

console.log('add file..')
router.post('/calculate', function (req, res, next) {
  console.log('add file 1.5..')
  helper.createClient('adderservice', function (err, addClient) {
    console.log('add file 2..')

    if (err) { console.log(err) }

    addClient.get('/add/' + req.body.first + '/' + req.body.second, function (err, serviceReq, serviceRes, resultObj) {
      if (err) { console.log(err) }

      res.render('add', {first: req.body.first, second: req.body.second, result: resultObj.result})
      var calcString = '' + req.body.first + ' + ' + req.body.second
      helper.createClient('auditservice', function (err, auditClient) {
        if (err) { console.log(err) }
        auditClient.post('/append', {calc: calcString, calcResult: resultObj.result}, function (err, req, res, obj) {
          if (err) { console.log(err) }
        })
      })
    })
  })
})
console.log('end export router')
module.exports = router

