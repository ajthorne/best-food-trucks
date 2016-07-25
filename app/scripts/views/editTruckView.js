import $ from 'jquery';
import Backbone from 'backbone';
import trucks from '../collections/trucks';
import store from '../store';
import router from '../router';

const EditTruck = Backbone.View.extend({
  // copied from singleTruckView, should be the same principle
  initialize: function (id) {
    if (!store.trucksCollection.get(id)) {
      store.trucksCollection.add({id: id}
      );
      //if a user visits the page directly, it will be added to collection so that they may
      //the content of that model
    }
    this.model = store.trucksCollection.get(id);
    console.log(this.model);
    this.model.fetch();
    this.model.on('change', () => {
      //use change when adding
      this.render();
    });
  },

  tagName: 'div',
  className: 'newTruck',
  template: function (){
    return `
    <input class ="nameTruck" type="text" name="truck-name" placeholder="name of truck" value="">
    <select class="cuisine">
      <option value="Italian">Italian</option>
      <option value="Chinese">Chinese</option>
      <option value="Thai">Thai</option>
      <option value="Greek">Greek</option>
      <option value="Mexican">Mexican</option>
      <option value="American">American</option>
      <option value="Latin">Latin</option>
      <option value="Dessert">Dessert</option>
      <option value="Vegan">Vegan</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Brunch">Brunch</option>
      <option value="Coffee/Tea">Coffee/Tea</option>
      <option value="Cuban">Cuban</option>
      <option value="Vietnamese">Vietnamese</option>
      <option value="Gluten Free">Gluten Free</option>
      <option value="Other">Other</option>
    </select>
    <input class ="signature" type="text" name="signature" placeholder="Signature Item" value="">
    <textarea class = "description" name="comment" placeholder="Write a description or review..."></textarea>
    <input class="submit" type="button" name="submit" value="Submit">
    `;
  },
  render: function (){
    console.log(this.model); // undefined
    this.$el.html(this.template());
    this.$el.find('.cuisine').val(this.model.get('cuisine'));
    this.$el.find(`[name='truck-name']`).val(this.model.get('name'));
    this.$el.find(`[name='signature']`).val(this.model.get('signature_item'));
    this.$el.find(`[name='comment']`).val(this.model.get('comment'));
    return this;
  },
  events: {
    'click .submit' : 'editTruck',
  },
  editTruck: function (){
    this.model.set('name', this.$el.find(`[name='truck-name']`).val());
    this.model.set('cuisine', this.$el.find('.cuisine').val());
    this.model.set('signature_item', this.$el.find(`[name='signature']`).val());
    this.model.set('comment', this.$el.find(`[name='comment']`).val());
    this.model.save();
    router.navigate('truckfeed', {trigger: true});
  }
});

export default EditTruck;
