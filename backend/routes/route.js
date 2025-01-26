const express=require('express');
const route=express.Router()
const {connectML}=require('../controllers/ml.js');

route.post('/',connectML);

module.exports=route