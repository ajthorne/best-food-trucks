import $ from 'jquery';
import Backbone from 'backbone';

const Truck = Backbone.Model.extend({
    urlRoot: ``,
    default: {
        name: '',
        cuisine: '',
        dish: '',
        img: ''
        //does img default need to be a path?
    },

    parse: function(response) {
      return {
        //returns username so it can be pulled to identify who posted/created the entry
      username: response.username
    };
  }
});

export default Truck;
