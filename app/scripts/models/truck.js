import $ from 'jquery';
import Backbone from 'backbone';

const Truck = Backbone.Model.extend({
    urlRoot: `https://warm-brook-49316.herokuapp.com/foodtrucks`,
    default: {
        id: '',
        name: '',
        cuisine: '',
        signature_item: '',
        truck_pic: ''
    },

    // parse: function(response) {
    //   return {
    //     //returns username so it can be pulled to identify who posted/created the entry
    //   username: response.username
    // };
  // }
});

export default Truck;
