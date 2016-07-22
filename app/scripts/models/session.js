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
                //add name
                //add authtoken
                //add id
            };
        }
    },
    login: function(username, password){
      console.log(`user: ${username} password: ${password}`);
    }
});

export default Session;
