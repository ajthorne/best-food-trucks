import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';
import router from '../router';
import users from '../collections/users';
import Vote from '../models/vote';

const SingleTruckFeed = Backbone.View.extend({
    tagName: 'li',
    className: 'individual-truck',
    template: function() {

        var toReturn = `
    <img src="${this.model.get('truck_pic')}" />
    <p class="individual-truck-name"><span>Name:</span> ${this.model.get('name')}</p>
    <p class="individual-truck-cuisine"><span>Cuisine: </span> ${this.model.get('cuisine')}</p>
    <p class="individual-truck-dish"><span> Signature Dish:</span> ${this.model.get('signature_item')}</p>
    `;

        //need to add vote/like button if user is logged in
        if (store.session.get('username') !== '') {
            toReturn += `<i class="fa fa-thumbs-up likeBtn like"></i>`;
        }
        toReturn += `<p id="votes"> VOTES </p><input id="numberVotes" type="text" name="total-votes" value=${this.model.get('votes_count')} readonly />`;


        //need to add delete/edit buttons if user created post
        //will look something like this...
        if (store.session.get('username') !== '') {
          var thisId = store.userCollection.where({
                  username: `${store.session.get('username')}`
              })[0].attributes.id || -1;
            if (thisId === this.model.get('user_id')) {
                toReturn += `<i class="fa fa-trash deleteBtn"></i>
                   <i class="fa fa-edit editBtn"></i>`;
            }
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

    editFunction: function() {
        router.navigate(`edittruck/${this.model.get('id')}`, {
            trigger: true
        });
    },

    deleteFunction: function() {
        this.model.destroy();
        router.navigate('truckfeed', {trigger: true});
    },

    singleTruckFunction: function(evt) {
        console.log(this.model.get('id'));
        router.navigate(`foodtrucks/${this.model.get('id')}`, {
            trigger: true
        });
    },

    likeFunction: function() {
     // var newVote = new Vote(this.model.get('id'));
     // newVote.save();
     this.model.set('votes_count', this.model.get('votes_count') + 1);
     this.$el.find('[name="total-votes"]').val(this.model.get('votes_count'));
    //  this.model.save();
   },

    render: function() {
        this.$el.html(this.template());

    }
});

export default SingleTruckFeed;
