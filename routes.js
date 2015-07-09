Router.configure({
  // we use the  appBody template to define the layout for the entire app
  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'NotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'loading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
});


Router.route('/', function(){
  //GAnalytics.pageview();
  this.render('Home');
});
Router.route('/friend', function(){
  //GAnalytics.pageview();
  this.render('Friend');
});