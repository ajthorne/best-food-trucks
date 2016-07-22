import $ from 'jquery';
import Backbone from 'backbone';
import nav from './views/nav';
import trucksFeed from './views/truckFeedView';
import store from './store';
import loginView from './views/loginView';
import addTruck from './views/addTruckView';

const Router = Backbone.Router.extend({
  routes: {
    login: 'loginFunction',
    truckfeed: 'truckFeedFunction',
    addtruck: 'addTruckFunction',
    edittruck: 'editTruckFunction',
    logout: 'logoutFunction',
    '/*': 'truckFeedFunction'
    //catch all to redirect user to home page
  },
  loginFunction: function(){
  $('.container').empty().append(nav.render().$el).append(loginView.render().$el);

},
  truckFeedFunction: function(){
    $('.container').empty().append(nav.render().$el).append(trucksFeed.render().$el);
  },
  addTruckFunction: function(){
    $('.container').empty().append(nav.render().$el).append(addTruck.render().$el);
  },
  editTruckFunction: function(){
    $('.container').empty().append(nav.render().$el).append(addTruck.render(true).$el);
  },
  logoutFunction: function(){
    store.session.clear();
    this.navigate('truckfeed', {trigger: true});
  }
});

const router = new Router();
export default router;
