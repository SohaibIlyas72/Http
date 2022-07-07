const express = require('express')
const path = require('path')
const app = express()
const Port = process.env.Port || 3000;
const mainRouter =require('./routes/index');
app.use(express.static('public'));
app.set('view engine', 'ejs');
const students =require('./student')
app.use(mainRouter);
app.use(express.json());
console.log(app.get('view engine'));
app.listen(Port, ()=>{
  console.log(`${Port} is working`)
})

app.post('/std', (req, res) => {
  // // res.json(students)
  // res.send('hello')
  console.log(req.body);
  if (!req.body.email)
  {
    res.status(400)
   return res.json({ error : 'this is error'})
  }
  const user={
    id : req.body.id,
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    emial : req.body.email

  }
  students.push(user)
  res.json(user)
})
app.put('/std/:id', (req, res) => {
  let id =req.params.id
   let first_name = req.body.first_name
 let last_name = req.body.last_name
  let emial = req.body.email

 const index= students.findIndex((students)=>{
    return (students.id==id)

  })
  if(index>=0)
  {
    let std=students[index]
    std.first_name= first_name
    std.last_name= last_name
    std.email=emial
    res.json(std)
  }else{
    res.status(404)
  }
  // res.send('hello')
})