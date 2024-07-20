const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ApiError = require("./app/api-error");
const vtpt_gc_router = require('./app/routes/vtpt_gc.route');
const khachhang_router = require('./app/routes/khachhang.route');

app.get('/',(req,res)=>{
    res.send('Hello isuzu');
})
app.use('/api/vtpt_gc', vtpt_gc_router);
app.use('/api/khachhang',khachhang_router);

// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    });
});


module.exports = app;