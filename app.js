const express = require('express');
const cors = require('cors');

const app = express();

const ApiError = require("./app/api-error");
const vtpt_gc_router = require('./app/routes/vtpt_gc.route');

app.get('/',(req,res)=>{
    res.send('Hello isuzu');
})
app.use('/api/vtpt_gc', vtpt_gc_router);


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

app.use(cors());
app.use(express.json());

module.exports = app;