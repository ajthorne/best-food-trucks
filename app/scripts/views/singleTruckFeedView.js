import $ from 'jquery';
import Backbone from 'backbone';

const SingleTruckFeed = Backbone.View.extend({
  tagName: 'li',
  className: 'individual-truck',
  template: function () {
    return `
    <img src="#" />
    <span class="individual-truck-name">Truck Name</span>
    <span class="individual-truck-cuisine">Truck Cuisine</span>
    <span class="individual-truck-dish">Truck Dish</span>
    `;
    //need to add voting/liking button if user is logged in
    //need to add delete/edit buttons if user created post
    },
  events: {
    //need an event for voting/liking
    //need an event for deleting
    //need an event for editing
  },

  render: function() {
    this.$el.html(this.template());

  }
});

export default SingleTruckFeed;
