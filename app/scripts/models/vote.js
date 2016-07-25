import Backbone from 'backbone';

const Vote = Backbone.Model.extend({
  initialize: function(id){
    this.foodtruck_id = id;
  },
  urlRoot: `https://warm-brook-49316.herokuapp.com/votes`,
  idAttribute: 'id'
});

export default Vote;
