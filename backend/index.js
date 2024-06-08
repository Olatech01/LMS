const express = require('express');
const connectDB = require('./connectDB/connect');
const dotenv = require('dotenv');
const router = require('./router/handler');

dotenv.config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDB();

app.use('/api/v1', router)



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
