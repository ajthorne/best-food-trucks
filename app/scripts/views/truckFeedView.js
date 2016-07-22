import $ from 'jquery';
import Backbone from 'backbone';
// import trucksCollection from './store';
import SingleTruckFeed from './singleTruckFeedView';

const TrucksFeed = Backbone.View.extend({
  // initialize: function () {
  //   store.trucksCollection.fetch();
  //
  //   store.trucksCollection.on('update', () => {
  //     this.render();
      //renders list of children to parent
      //updates whenever new information is added, removed, changed
  //   });
  // },

  tagName: 'section',
  //parent container for truck feed
  className: 'truck-feed',
  template: function() {
    return `
    <h1>Best of Austin Food Trucks</h1>
    <ul class="truck-feed-holder">
    </ul>
    `;
  },

  render: function () {
    this.$el.html(this.template());

    //forEach function needed to iterate over data stored
    //store.trucksCollection.forEach((truck, i, arr) => {
        // let truckFeed = new SingleTruckFeed({
        //   model: truck
        // });
        // truckFeed.render();
        // this.$('.truck-feed-holder').append(truckFeed.$el);
  // });

    return this;
  }

});

let trucksFeed = new TrucksFeed ();

export default trucksFeed;
