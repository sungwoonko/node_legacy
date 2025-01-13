const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')
app.get('/',  (req, res) => {    //  => , function(req,res) 같은 표기법이다.
  console.group('Got a GET request from Client')
  res.send('Got a response from Server')
})
app.post('/',  (req, res) => {    
  console.group('Got a POST request from Client')
  res.send('Got a response from Server')
  res.render('index')
})
app.put('/user',  (req, res) => {   
  console.group('Got a PUT request from Client')
  res.send('Got a response from Server')})
app.get('/blog',  (req, res) => {    //  => , function(req,res) 같은 표기법이다.
  res.render('blog')
})
app.delete('/user',  (req, res) => {     //  실행할때 /user이라고 적혀있으면 이것도 같이 적어줘야한다.
  console.group('Got a DELETE request from Client')
  res.send('Got a response from Server')})
app.get('/users',  (req, res) => {    //  => , function(req,res) 같은 표기법이다.
  res.render('users')
})

app.listen(port, () => {
  console.log(`Node Legacy App listening on port ${port}`)
})