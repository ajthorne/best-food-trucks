import $ from 'jquery';
import Backbone from 'backbone';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    truckfeed: 'truckFeedFunction',
    addtruck: 'addTruckFunction'
  },
  loginFunction: function(){
    console.log('log in page');
  },
  truckFeedFunction: function(){
    console.log('truck feed page');
  },
  addTruckFunction: function(){
    console.log('add truck page');
  }
});

const router = new Router();
export default router;
