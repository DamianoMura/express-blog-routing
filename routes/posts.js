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
  res.send(`post id ${req.params.id}`);
})

// insert new  id 
router.post('/',(req,res)=>{
  res.send(`create new post`);
})

// update post  id 
router.put('/',(req,res)=>{
  res.send(`update post ${req.params.id}`);
})

// modify post  id 
router.patch('/',(req,res)=>{
  res.send(`modify post ${req.params.id}`);
})

