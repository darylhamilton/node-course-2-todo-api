const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: '5ba8757abb7cfb311ac9e232'}).then

Todo.FindByIdAndRemove('5ba8757abb7cfb311ac9e232').then((todo) => {
  console.log(todo);
});
