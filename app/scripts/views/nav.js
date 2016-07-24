import $ from 'jquery';
import Backbone from 'backbone';
import session from '../models/session';
import store from '../store';

// Coop worked on this. This page shows the log in, sign up, logout and home page

const Nav = Backbone.View.extend({
    tagName: 'nav',
    template: function() {
      let toReturn = `
        <a href ="#truckfeed"> <img class = "truckLogo" src="https://d30y9cdsu7xlg0.cloudfront.net/png/745-200.png" alt="foodTruckLogo" /></a>
        <a class = "navButton"  href = "#logout"> Logout </a>
        <a class = "navButton"  href = "#login"> Sign-Up</a>
        <a class = "navButton" href = "#login"> Login</a>
        `;
    if (store.session.get('username')) {
      toReturn += `<a class = "navButton" href = "#addtruck"> Add Truck</a>`;
    }
    return toReturn;
},


    // edit by James, routing to truckfeed will not run logout function


    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

let nav = new Nav();


export default nav;
