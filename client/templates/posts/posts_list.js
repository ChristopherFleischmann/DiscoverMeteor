// hard code some basic posts
var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'TaRDIS Robotics',
    url: 'https://www.team5416.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];
//add helper using the same name as the template name
Template.postsList.helpers({
  posts: postsData
});
