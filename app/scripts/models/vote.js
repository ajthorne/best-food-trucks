import Backbone from 'backbone';

const Vote = Backbone.Model.extend({
  initialize: function(id){
    this.foodtruck_id = id;
  },
  url: `https://warm-brook-49316.herokuapp.com/votes`
});

export default Vote;
