import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';
import router from '../router';

const SingleTruckFeed = Backbone.View.extend({
    tagName: 'li',
    className: 'individual-truck',
    template: function() {
        // let optionBtns = '';
        // let likeBtn = '';

        return `
    <img src="${this.model.get('truck_pic')}" />
    <span class="individual-truck-name">Name: ${this.model.get('name')}</span>
    <span class="individual-truck-cuisine">Cuisine: ${this.model.get('cuisine')}</span>
    <span class="individual-truck-dish">Signature Dish: ${this.model.get('signature_item')}</span>
    `;
        // <span class="individual-truck-options">${optionsBtns}</span>
        // <span class="individual-truck-like">${likeBtn}</span>
        // <span class="individual-truck-author">Truck Username</span>

        //need to add vote/like button if user is logged in
        //if (store.session.get('username') {
        // likeBtn = `<i class="fa fa-star likeBtn"></i>`;
        // })


        //need to add delete/edit buttons if user created post
        //will look something like this...
        // if (store.session.get('username') === this.model.get('username')) {
        //optionBtns = `<i class="fa fa-trash deleteBtn"></i>
        //              <i class="fa fa-edit editBtn"></i>`;
        // }

    },
    events: {
        'click img': 'singleTruckFunction'
    //need an event for voting/liking
    // 'click .likeBtn': 'likeFunction',

        //need an event for voting/liking
        // 'click .likeBtn': 'likeFunction',

        //need an event for deleting
        //'click .deleteBtn': 'deleteFunction',
        //
        //need an event for editing
        //'click .editBtn': 'editFunction'
    },

    singleTruckFunction: function (evt) {
      console.log(this.model.get('id'));
      router.navigate(`foodtrucks/${this.model.get('id')}`, {trigger: true});
    },

    //deleteFunction:  function () {
    // this.model.destroy()
    // }
  //deleteFunction:  function () {
  // this.model.destroy()
  // }
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
