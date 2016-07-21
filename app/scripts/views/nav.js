import $ from 'jquery';
import Backbone from 'backbone';

// Coop worked on this. This page shows the log in, sign up, logout and home page

const Nav = Backbone.View.extend({
    tagName: 'nav',
  template: function() {
        return`
        <a href ="#home"> <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/745-200.png" alt="foodTruckLogo" /></a>
        <a href = "#login"> Login</a>
        <a href = "#login"> Sign-Up</a>
        <a href = "#home"> Logout </a>
        `;
    },

    render: function(){
      this.$el.html(this.template());
      return this;
    }
});

let nav = new Nav();


export default nav;