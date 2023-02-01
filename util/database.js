// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;


const mongodb=require('mongodb');
const { GREEK } = require('mysql2/lib/constants/charsets');
const MongoClient=mongodb.MongoClient;
let _db;

const mongoConnect=callback=>{
  MongoClient.connect('mongodb+srv://arjun:simran@cluster0.rjlptec.mongodb.net/shop?retryWrites=true&w=majority')
.then((client)=>{
  console.log("connected!!")
  _db=client.db()
  callback();
})
.catch((err)=>{
  console.log(err)
  throw err;
});
}

const getDb=()=>{
  if(_db){
    return _db
  }
  throw "No Database found!!"
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;