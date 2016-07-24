import Backbone from 'backbone';
import trucks from '../collections/trucks';
import store from '../store';

// Coop worked on this, might need to double check the create function below

const AddTruck = Backbone.View.extend({
  tagName: 'div',
  className: 'newTruck',
  template: function (){
    return `
    <h1> Add Your Favorite Truck Here </h1>
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
    <textarea class ="description" name="comment" placeholder="Write a description or review..."></textarea>
    <input class="submit" type="button" name="submit" value="Submit">
    `;
  },
  render: function (){
    this.$el.html(this.template());
    return this;

  },
  events: {
    'click .submit' : 'addTruck',
  },
  addTruck: function (){
    this.model = store.trucksCollection.create({
      name: this.$el.find(`[name='truck-name']`),
      cuisine: this.$el.find('.cuisine').val(),
      signature_item: this.$el.find(`[name='signature']`).val(),
      comment: this.$el.find(`[name='comment']`).val(),
      username: store.session.username
    }, {
      success: function(){

    }});
    // url:
  }
});

let addTruck = new AddTruck();

export default addTruck;
