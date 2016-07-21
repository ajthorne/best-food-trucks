import $ from 'jquery';
import Backbone from 'backbone';

const Truck = Backbone.Model.extend({
    urlRoot: ``,
    default: {
        name: '',
        cuisine: '',
        dish: ''
    },

    // parse: function(response) {
    //
    // }
});

export default Truck;
