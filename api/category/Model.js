const {Schema,model}=require('mongoose')
const categoryschema=new Schema(
    {
     CategoryName:{
        type:String,
        unique:true,
        required:true,
     },
     CategoryImage:{
        type:String,
        required:true,
     }
        
    }
    
)
const final=model('category',categoryschema)
module.exports=final
