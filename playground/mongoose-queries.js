const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ba6c4d87c99602a1a36d0eb';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo', todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '5b9e071424ea50156e87443c';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// User.find({
//   _id: id
// }).then((users) => {
//   console.log('Users', users);
// });
//
// User.findOne({
//   _id: id
// }).then((user) => {
//   console.log('User', user);
// });

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));
