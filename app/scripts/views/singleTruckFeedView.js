import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';
import router from '../router';

const SingleTruckFeed = Backbone.View.extend({
  tagName: 'li',
  className: 'individual-truck',
  template: function() {

    var toReturn = `
    <div>
      <img src="${this.model.get('truck_pic')}" />
    </div>
    <div>
    <p class="individual-truck-name"><span>Name:</span> ${this.model.get('name')}</p>
    <p class="individual-truck-cuisine"><span>Cuisine: </span> ${this.model.get('cuisine')}</p>
    <p class="individual-truck-dish"><span> Signature Dish:</span> ${this.model.get('signature_item')}</p>
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
    toReturn += `</div>`;
    return toReturn;
  },

  events: {
    'click img': 'singleTruckFunction',
    'click .likeBtn': 'likeFunction',
    'click .deleteBtn': 'deleteFunction',
    'click .editBtn': 'editFunction'
  },

  editFunction: function(){
    router.navigate('edittruck', {trigger: true});
  },

  deleteFunction:  function () {
    this.model.destroy();
  },

  singleTruckFunction: function (evt) {
    console.log(this.model.get('id'));
    router.navigate(`foodtrucks/${this.model.get('id')}`, {trigger: true});
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
