import $ from 'jquery';
import Backbone from 'backbone';
import nav from './views/nav';
import trucksFeed from './views/truckFeedView';
import SingleTruck from './views/singleTruckView';
import store from "./store";

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    truckfeed: 'truckFeedFunction',
    addtruck: 'addTruckFunction',
    'foodtrucks/:id': 'singleTruckFunction',
    logout: 'logoutFunction',
    '/*': 'truckFeedFunction'
    //catch all to redirect user to home page
  },
  loginFunction: function(){
  $('.container').empty().append(nav.render().$el);
},
  truckFeedFunction: function(){
    $('.container').empty().append(nav.render().$el).append(trucksFeed.render().$el);
  },

  singleTruckFunction: function (id) {
    let singleTruck = new SingleTruck(id);
    $('.container').empty().append(singleTruck.render().$el);
  },

  addTruckFunction: function(){
    $('.container').empty().append(nav.render().$el);
  },
  logoutFunction: function(){
    store.session.clear();
    this.navigate('truckfeed', {trigger: true});
  }
});

const router = new Router();
export default router;
