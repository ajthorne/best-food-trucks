import $ from 'jquery';
import Backbone from 'backbone';
import Truck from '../models/truck';

const Trucks = Backbone.Collection.extend({
  url: ``,
  model: Truck
});

let trucksCollection = new Trucks();

export default trucksCollection;
