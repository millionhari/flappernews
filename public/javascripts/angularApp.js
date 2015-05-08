var app = angular.module('flapperNews', [
  'ui.router',
  'flapperNews.services'
  ])

// Routes
.config(
  function($stateProvider, $urlRouterProvider){

  $stateProvider
  // Home
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl as mainctrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl as postsctrl'
    });

  $urlRouterProvider.otherwise('home');
});



// Main Controller
app.controller('MainCtrl', function(Posts){

  var self = this;

  //Bind posts to factory
  self.posts = Posts.posts;

  self.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4},
  ];

  self.addPost = function(){
    if (!self.title || self.title === ''){ return; };
    self.posts.push({
      title: self.title,
      link: self.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
      });
    self.title = '';
    self.link = '';
  };

  self.incrementUpvotes = function(post){
    post.upvotes++;
  };
});

// Posts Controller

app.controller('PostsCtrl', function(Posts, $stateParams){
  var self = this;
  self.post = Posts[$stateParams.id];

  self.addComment = function(){
    if (self.body === '') { return; };
    self.post.comments.push({
      body: self.body,
      author: 'user',
      upvotes: 0
    });
    self.body = '';
  };
});
