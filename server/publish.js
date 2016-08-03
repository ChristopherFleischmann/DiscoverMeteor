//returns all the posts on the server and client side;
Meteor.publish('posts', function(){
  return Posts.find();
});
