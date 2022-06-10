const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    password:'yogita@123',
    database:'mydata'
})

connection.connect((err)=>{
    if(err){
        console.log('connection not proper')
    }
    else{
        console.log('connected')
    }
})

module.exports = connection;
