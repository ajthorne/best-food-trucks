import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';

const SingleTruck = Backbone.View.extend({
  initialize: function (id) {
    this.model = store.trucksCollection.get(id);
  },
  tagName: 'div',
  className: 'single-truck',
  template: function () {
    return `
    <h2 class="individual-truck-name">${this.model.get('name')}</h2>
    <img src="${this.model.get('truck_pic')}">
    <span class="individual-truck-cuisine">Cuisine: ${this.model.get('cuisine')}</span>
    <span class="individual-truck-dish">Signature Dish: ${this.model.get('signature_item')}</span>
    <span>Find on </span><a href="${this.model.get('yelp_url')}" class="individual-truck-dish">Yelp!</a>`;
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

export default SingleTruck;
