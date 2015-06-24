if (Meteor.isServer) {
  Meteor.startup(function () {


  });

  








  Accounts.validateNewUser(function (user) {
    console.log(user.services.google.email);
    if(user.services.google.email.match(/vit\.ac.in$/)) {
        return true;
    }
    throw new Meteor.Error(403, "You must sign in using a vit.ac.in account");
  });



























}// isServer