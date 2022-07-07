const express = require('express')
// const app = express()
const router = require('express').Router();
const { application } = require('express');
const apikeymiddlewear=require('../middelware/apikey')
const students=require('../student')
// app.use(express.json());
router.get('/', (req, res) => {
    res.render('index' ,{
      title: 'my home'
    });
  })
  router.get('/about', (req, res) => {
    res.render('about' , {
      title: 'my about'
    });
  })
  router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/about.html')
  })
  router.get('/api/products',apikeymiddlewear,(req,res)=>{
    res.json([
            {
            id: '123',
            name: 'kashif'
        },
        {
            id: '456',
            name: 'kashif3'
        }
    ])
  })
  router.get('/std', (req, res) => {
    res.json(students)
    // res.send('hello')
  })
  // router.post('/std', (req, res) => {
  //   // // res.json(students)
  //   res.send('hello')
  //   console.log(req.body);
  //   if (!req.body.email)
  //   {
  //     res.status(400)
  //   }
  //   const user={
  //     id : students.length+1,
  //     first_name : req.body.first_name,
  //     last_name : req.body.last_name,
  //     emial : req.body.email

  //   }
  //   students.push(user)
  //   res.json(user)
  // })
  // router.put('/std/:id', (req, res) => {
  //   let id =req.params.id
  //    let first_name = req.body.first_name
  //  let last_name = req.body.last_name
  //   let emial = req.body.email

  //  const index= students.findIndex((students)=>{
  //     return (students.id==id)

  //   })
  //   if(index>=0)
  //   {
  //     let std=students[index]
  //     std.first_name= first_name
  //     std.last_name= last_name
  //     std.email=emial
  //     res.json(std)
  //   }else{
  //     res.status(404)
  //   }
  //   // res.send('hello')
  // })
module.exports = router;