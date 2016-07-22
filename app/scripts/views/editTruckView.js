import $ from 'jquery';
import Backbone from 'backbone';
import trucks from '../collections/trucks';

const EditTruck = Backbone.View.extend({
  tagName: 'div',
  className: 'newTruck',
  template: function (){
    return `
    <input type="text" placeholder="name of truck" value="">
    <input type="checkbox" name="italian" value="Italian">
    <input type="checkbox" name="chinese" value="Chinese">
    <input type="checkbox" name="Thai" value="Thai">
    <input type="checkbox" name="Greek" value="Greek">
    <input type="checkbox" name="Mexican" value="Mexican">
    <input type="checkbox" name="American" value="American">
    <input type="checkbox" name="Latin" value="Latin">
    <input type="checkbox" name="Dessert" value="Dessert">
    <input type="checkbox" name="Vegan" value="Vegan">
    <input type="checkbox" name="Vegeterian" value="Vegeterian">
    <input type="checkbox" name="Brunch" value="Brunch">
    <input type="checkbox" name="Coffee/Tea" value="Coffee/Tea">
    <input type="checkbox" name="Cuban" value="Cuban">
    <input type="checkbox" name="Vietnamese" value="Vietnamese">
    <input type="checkbox" name="Gluten Free" value="Gluten Free">
    <input type="text" name="other-type" placeholder="Type of Cuisine" value="">
    <input type="text" name="signature" placeholder="Signature Item" value="">
    <input class="submit" type="button" name="submit" value="Submit">
    `;
  },
  render: function (){
    this.$el.html(this.template());
    this.$el.find(`[name=${this.model.get('cuisine')}]`).prop('checked', true);
    this.$el.find(`[name='other-type']`).val(this.model.get('name'));
    this.$el.find(`[name='signature']`).val(this.model.get('signature_item'));
  },
  events: {
    'click .submit' : 'addTruck',
  },
  addTruck: function (){
    this.model = trucks.create(addTruck);
  }
});

let editTruck = new EditTruck();

export default editTruck;
