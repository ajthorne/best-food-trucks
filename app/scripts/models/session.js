import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';

const Session = Backbone.Model.extend({
    urlRoot: `https://warm-brook-49316.herokuapp.com/sign-in`,
    defaults: {
        username: '',

    },

    parse: function(response) {
      //when data is returned from server, keep track of the things below to pull later
      if (response) {
        return {
          username: response.username,
          // edit by James, set authtoken, userId, and favorites array for this session
          // userId: response._id,
          favorites: response.favorites

        };
      }
    },

    // will change when BE-FE connection is established
    login: function(username, password) {
        this.save({
            username: username,
            password: password
        }, {
            success: (model, response) => {
                this.unset('password');
                window.localStorage.setItem('authtoken', '906aafeeb8f54577bc398fbcbcb39b77');
                router.navigate('truckfeed', {trigger: true});
<<<<<<< HEAD
                console.log("YOU ARE LOGGED IN BIATCH");
=======
>>>>>>> c8e33a971f3cbc167f78f101999a88e9b0d0c502
            }

        });

    },
    signup: function(username, password) {
        // console.log(`new user: ${username} new password: ${password}`);
        // creting a new user odel and saving it to collection (.create)
    },
    // retrieve: function() {
    //     this.fetch({});
    //
    //     }
});

export default Session;
