import $ from 'jquery';
import Backbone from 'backbone';
import nav from './views/nav';
import trucksFeed from './views/truckFeedView';
import store from './store';
import loginView from './views/loginView';
import addTruck from './views/addTruckView';
import SingleTruck from './views/singleTruckView';
import editTruck from './views/editTruckView';
import singleTruckNav from './views/singleTruckNavView';
import footer from './views/footerView';

const Router = Backbone.Router.extend({
    routes: {
        login: 'loginFunction',
        truckfeed: 'truckFeedFunction',
        addtruck: 'addTruckFunction',
        edittruck: 'editTruckFunction',
        'foodtrucks/:id': 'singleTruckFunction',
        logout: 'logoutFunction',
        '/*': 'truckFeedFunction'
            //catch all to redirect user to home page
    },
    loginFunction: function() {
        $('.container').empty()
            .append(nav.render().$el)
            .append(loginView.render().$el)
            .append(footer.render().$el);

    },
    truckFeedFunction: function() {
        $('.container').empty()
        .append(nav.render().$el)
        .append(trucksFeed.render().$el)
        .append(footer.render().$el);

    },

    singleTruckFunction: function(id) {
        let singleTruck = new SingleTruck(id);
        $('.container').empty()
        .append(singleTruckNav.render().$el)
        .append(singleTruck.render().$el)
        .append(footer.render().$el);
    },

    addTruckFunction: function() {
        $('.container').empty()
        .append(nav.render().$el)
        .append(addTruck.render().$el)
        .append(footer.render().$el);

    },
    editTruckFunction: function() {
        $('.container').empty()
        .append(nav.render().$el)
        .append(editTruck.render().$el)
        .append(footer.render().$el);
    },
    logoutFunction: function() {
        store.session.clear();
        this.navigate('truckfeed', {
            trigger: true
        });
    }
});

const router = new Router();
export default router;
