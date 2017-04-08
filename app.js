console.log("starting app");

const fs=require('fs');
const os = require('os');
const _= require('lodash');
const notes = require('./notes.js');
//const _ = require('lodash');
//var res = notes.add(10,12);
//var filArray = _.uniq(['Mike',1,'Justin',1,2,3,4]);
var command= process.argv[2];
console.log(command);

//var user = os.userInfo();
//console.log('Result',res);
//fs.appendFile('greetings.txt',`Hello ${user.username} world!! You are ${notes.age}`);

/*fs.appendFile('greetings.txt','Hello world!!',function(err){
  if(err){
    console.log('Unable to write to file');
  }
});
*/
