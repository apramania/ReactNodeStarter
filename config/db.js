const mysql = require('mysql')

const connectMySql = () => {
    try{
        const conn =  mysql.createConnection({
            host: "localhost",
            user: "root",
            password: ""
          });
          
          conn.connect(function(err) {
            if (err) throw err;
            console.log("MySql Connected!");
          });
    }catch(err){

    }
}

module.exports = connectMySql

