import Backbone from 'backbone';

const User = Backbone.Model.extend({
  urlRoot: `https://warm-brook-49316.herokuapp.com/`
});

export default User;
