import $ from 'jquery';
import Backbone from 'backbone';
import Truck from '../models/truck';

const Trucks = Backbone.Collection.extend({
  url: `https://warm-brook-49316.herokuapp.com/`,
  model: Truck
});

export default Trucks;
