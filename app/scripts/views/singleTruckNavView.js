import $ from 'jquery';
import Backbone from 'backbone';

const SingleTruckNav = Backbone.View.extend({
    tagName: 'nav',
    template: function() {
        return `
        <a href="#truckfeed"> <img class = "truckLogo" src="https://d30y9cdsu7xlg0.cloudfront.net/png/745-200.png" alt="foodTruckLogo" /></a>
        <a class="backButton" href="#truckfeed"> Back</a>
        `;
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

let singleTruckNav = new SingleTruckNav();


export default singleTruckNav;
