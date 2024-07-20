const express = require('express');
const cors = require('cors');

const app = express();

//routers
app.get('/',(req,res)=>{
    res.send('Hello isuzu');
})
const vtpt_gc_router = require('./app/routes/vtpt_gc.route');
app.use('/api/vtpt_gc', vtpt_gc_router);

app.use(cors());
app.use(express.json());

module.exports = app;