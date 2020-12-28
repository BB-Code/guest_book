const express = require('express');
const app = express();

app.set('json spaces',4);
app.get('/',(req,res)=>{
    res.json({
        status: 200
    });
});

app.listen(3636,()=>{
    console.log(`Server is running at port 3636`);
});