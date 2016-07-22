import $ from 'jquery';
import Backbone from 'backbone';
import trucks from '../collections/trucks';

const EditTruck = Backbone.View.extend({
  tagName: 'div',
  className: 'newTruck',
  template: function (){
    return `
    <input type="text" name="truck-name" placeholder="name of truck" value="">
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
    <input type="text" name="signature" placeholder="Signature Item" value="">
    <textarea name="comment" placeholder="Write a description or review..."></textarea>
    <input class="submit" type="button" name="submit" value="Submit">
    `;
  },
  render: function (){
    this.$el.html(this.template());
    this.$el.find('.cuisine').val(`${this.model.get('cuisine')}`);
    this.$el.find(`[name='truck-name']`).val(this.model.get('name'));
    this.$el.find(`[name='signature']`).val(this.model.get('signature_item'));
    this.$el.find(`[name='comment']`).val(this.model.get('comment'));
  },
  events: {
    'click .submit' : 'editTruck',
  },
  editTruck: function (){
    this.model.set('name', this.$el.find(`[name='truck-name']`));
    this.model.set('cuisine', this.$el.find('.cuisine').val());
    this.model.set('signature_item', this.$el.find(`[name='signature']`).val());
    this.model.set('comment', this.$el.find(`[name='comment']`).val());
  }
});

let editTruck = new EditTruck();

export default editTruck;
