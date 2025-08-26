const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const resultRoutes=require('./routes/resultRoutes.js');



dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(()=>console.log('MongoDB connected successfully'))
  .catch((err)=> {
    console.error('MongoDB connection error:',err);
  });

app.use('/api',resultRoutes);




  app.use((err,req,res,next)=>{
     console.error('Unhandled error:',err);
     res.status(500).json({message:'Internal Server Error'});
  });



app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})