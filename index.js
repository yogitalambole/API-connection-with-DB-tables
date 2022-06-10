const con = require('./connection');

const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    con.query('select * from students', (err, data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})

app.listen(3000, function() {
    console.log('listening on 3000')
  });
