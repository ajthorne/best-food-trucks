import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';
import router from '../router';

const SingleTruckFeed = Backbone.View.extend({
  tagName: 'li',
  className: 'individual-truck',
  template: function () {
    // let optionBtns = '';
    // let likeBtn = '';

    var toReturn = `
    <img src="#" />
    <span class="individual-truck-name">Truck Name</span>
    <span class="individual-truck-cuisine">Truck Cuisine</span>
    <span class="individual-truck-dish">Truck Dish</span>
    <span class="individual-truck-author">Truck Username</span>

    `;
    // removed, should be replaced by fa icons
    // <span class="individual-truck-options">Options Btns</span>
    // <span class="individual-truck-like">Like Btn</span>


    //need to add vote/like button if user is logged in
    if (store.session.get('username')) {
      toReturn += `<i class="fa fa-star likeBtn"></i>`;
    }


    //need to add delete/edit buttons if user created post
    //will look something like this...
    if (store.session.get('username') === this.model.get('username')) {
      toReturn += `<i class="fa fa-trash deleteBtn"></i>
                   <i class="fa fa-edit editBtn"></i>`;
    }

    return toReturn;
  },
  events: {
    //need an event for voting/liking
    'click .likeBtn': 'likeFunction',

    //need an event for deleting
    'click .deleteBtn': 'deleteFunction',
    //
    //need an event for editing
    'click .editBtn': 'editFunction'
  },
  editFunction: function(){
    router.navigate('edittruck', {trigger: true});
  },
  deleteFunction:  function () {
    this.model.destroy();
  },
  likeFunction: function(){
    if (store.session.favorites.indexOf(this.model.get('id')) === -1){
      this.model.set('vote_count', this.model.get('vote_count') + 1);
      store.session.favorites.push(this.model.get('id'));
    } else {
      alert('You already liked this!');
    }
  },

  render: function() {
    this.$el.html(this.template());

  }
});

export default SingleTruckFeed;
