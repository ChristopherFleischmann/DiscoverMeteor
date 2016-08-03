//Uses a different approach than the posts_list.js but the concept is very similar,
//here we use a object called domain to contain the meta of the site.

//In the object we create a new variable that creates a url from postItem.
//Things to remember: document.createElement();
Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
