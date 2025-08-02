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
router.put('/:id',(req,res)=>{
  res.send(`update post ${req.params.id}`);
})

// modify post  id 
router.patch('/:id',(req,res)=>{
  res.send(`modify post ${req.params.id}`);
})

// delete post  id 
router.delete('/id',(req,res)=>{
  res.send(`delete post ${req.params.id}`);
})

