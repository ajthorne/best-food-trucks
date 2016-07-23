import Backbone from 'backbone';
import trucks from '../collections/trucks';
import store from '../store';

// Coop worked on this, might need to double check the create function below

const AddTruck = Backbone.View.extend({
  tagName: 'div',
  className: 'newTruck',
  template: function (){
    return `
    <input type="text" name="truck-name" placeholder="name of truck" value="">
    <select class="cuisine">
      <option value="Italian"></option>
      <option value="Chinese"></option>
      <option value="Thai"></option>
      <option value="Greek"></option>
      <option value="Mexican"></option>
      <option value="American"></option>
      <option value="Latin"></option>
      <option value="Dessert"></option>
      <option value="Vegan"></option>
      <option value="Vegetarian"></option>
      <option value="Brunch"></option>
      <option value="Coffee/Tea"></option>
      <option value="Cuban"></option>
      <option value="Vietnamese"></option>
      <option value="Gluten Free"></option>
      <option value="Other"></option>
    </select>
    <input type="text" name="signature" placeholder="Signature Item" value="">
    <textarea name="comment" placeholder="Write a description or review..."></textarea>
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
    this.model = trucks.create({
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
