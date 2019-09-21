var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json'); //save on db.json file

db = low(adapter);
db.defaults({
	users: [],
 	session: [],
 	transfer: []
 	})
  .write();

module.exports = db;