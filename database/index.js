var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db', {
  useMongoClient: true,});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db open');
});

var usersSchema = mongoose.Schema({
    username: String,
    password: String
});

var booksSchema = mongoose.Schema({
    title: String,
    author: String
});

var User = mongoose.model('User', usersSchema);
var Book = mongoose.model('Book', booksSchema);



exports.User = User;
exports.Book = Book;