
require('dotenv').config();
const express = require('express');
const app = express();


const PORT = process.env.PORT || 8080;

require('./models/dbconnection');

const authRouter = require('./routes/authRouter');

const cors = require('cors');

app.use(cors({
  origin: ["https://your-frontend.onrender.com", "http://localhost:5173"],
  credentials: true
}));


app.get('/',(req,res) => {
    res.send('Hello from Auth Server hi');
})

app.use('/auth',authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) 
