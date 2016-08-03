//Here we put some of the hard code on the server
//This file inserts 3 basic posts if there are none on the server
if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'TaRDIS Robotics',
    url: 'https://www.team5416.com'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
};
