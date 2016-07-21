import $ from 'jquery';
import Backbone from 'backbone';

const Session = Backbone.Model.extend({
  urlRoot: ``,
  defaults: {
    username: ''
  },

  // parse: function (response) {
  //
  // }
});

let session = new Session();

export default session;
