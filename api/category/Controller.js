
const Category=require('./Model')
const {connect}=require('mongoose')
require('dotenv').config()

const getallcategory=async(req, res) => {
  try {
    await connect(process.env.MONGO_URL)
      const allcategories= await Category.find()
      res.json({
        Category:allcategories

      })
  }
   catch (err) {
    res.json({
  message:err.message

    })
    
  }
  }
  const getcategorybyid=async(req, res) => {
    try {
      const {_id}=req.query
      await connect(process.env.MONGO_URL)
        const allcategories= await Category.findOne({_id})
        res.json({
          Category:allcategories
  
        })
    }
     catch (err) {
      res.json({
    message:err.message
  
      })
      
    }
  }
  const createcategory=async(req, res) => {
    const {CategoryName,CategoryImage}=req.body
    if(!CategoryName || !CategoryImage)
     {
      res.json(
        {
          message:"Missing Field Required"
        }
      )
      
     }
    else{
      try {
        await connect(process.env.MONGO_URL)
        const checkexist=await Category.exists({CategoryName:CategoryName})
        if(checkexist)
        {
          res.json({
            message:"Category Already Exist"
          })
        }
        else{
          // await connect(process.env.MONGO_URL)
          await Category.create({CategoryName,CategoryImage})
          const allcategories= await Category.find()
          res.json({
            message:"Category Added",
            allcategories

          })
            
        }
      
      
      } catch (err) {
        res.json({
      message:err.message
  
        })
        
      }
    }
  }
  const updatecategory=async(req, res) => {
    const {_id,CategoryName,CategoryImage}=req.body
    const filter={_id}
    const update={CategoryName,CategoryImage}
    try {

      await connect(process.env.MONGO_URL)
      const categoryy=await Category.findOneAndUpdate(filter,update,{
        new:true
      })
      const allcategories= await Category.find()
      res.json({
        message:"Succcesfully Updated",
        Category:allcategories
      })
    } catch (err) {
      res.json({
    message:err.message

      })
      
    }
  }
  const deletecategory=async(req, res) => {
    try {
      const {_id}=req.body
      await connect(process.env.MONGO_URL)
      await Category.deleteOne({_id})
      const remainingcategory= await Category.find()
        res.json({
          message:"Deleted SuccesFully",
          remainingcategory
  
        })
    }
     catch (err) {
      res.json({
    message:err.message
  
      })
      
    }
  }
  module.exports={ getallcategory,getcategorybyid,createcategory,updatecategory,deletecategory }
