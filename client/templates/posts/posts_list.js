//Using a variable to hard code several basic post objects
//Things to remember: equal signs verses collons
// var postsData = [
//   {
//     title: 'Google',
//     url: 'https://www.google.com'
//   },
//   {
//     title:'The Meteor Book',
//     url: 'https://www.discovermeteor.com'
//   },
//   {
//     title: 'TaRDIS Robotics',
//     url: 'https://www.team5416.com'
//   }
// ];


//add helper that goes through the posts and returns if it finds one.
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});
