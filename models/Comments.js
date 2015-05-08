var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectID, ref:'Post'}]
});

mongoose.model('Comment', CommentSchema);
