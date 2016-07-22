import $ from 'jquery';
import Backbone from 'backbone';
import nav from './views/nav';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    truckfeed: 'truckFeedFunction',
    addtruck: 'addTruckFunction',
    '/*': 'truckFeedFunction'
    //catch all to redirect user to home page
  },
  loginFunction: function(){
  $('.container').empty().append(nav.render().$el);
},
  truckFeedFunction: function(){
    $('.container').empty().append(nav.render().$el);
  },
  addTruckFunction: function(){
    $('.container').empty().append(nav.render().$el);
  }
});

const router = new Router();
export default router;
