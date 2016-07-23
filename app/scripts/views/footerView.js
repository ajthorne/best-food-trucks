import $ from 'jquery';
import Backbone from 'backbone';

const Footer = Backbone.View.extend({
    tagName: 'footer',
    template: function() {
        return `
        <section>
        <p class="copyright">© 2016 Coop, Amanda, James, and Matt @ The Iron Yard</p>
        <a href="http://www.theironyard.com">
        <img class="tiy-logo" src="https://www.theironyard.com/etc/designs/theironyard/icons/iron-yard-logo.svg"/>
        </a>
        </section>
        `;
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

let footer = new Footer();


export default footer;
