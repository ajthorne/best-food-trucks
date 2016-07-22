import $ from 'jquery';
import Backbone from 'backbone';

const Session = Backbone.Model.extend({
    urlRoot: ``,
    defaults: {
        username: ''
    },

    parse: function(response) {
      //when data is returned from server, keep track of the things below to pull later
      if (response) {
        return {
          username: response.username,
          // edit by James, set authtoken, userId, and favorites array for this session
          authtoke: response._kmd.authtoken,
          userId: response._id,
          favorites: response.favorites

        };
      }
    },

    // will change when BE-FE connection is established
    login: function(username, password){
      console.log(`user: ${username} password: ${password}`);
    },
    signup: function(username, password){
      console.log(`new user: ${username} new password: ${password}`);
    }
});

export default Session;
