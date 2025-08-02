// import express
const express = require('express');
const router = express.Router();

// define all routes
//index for posts

router.get('/',(req,res)=>{
  res.send('index');
})

// show id 
router.get('/:id',(req,res)=>{
  res.send(`item id ${req.params.id}`);
})

