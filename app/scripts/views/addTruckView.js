import Backbone from 'backbone';
import trucks from './collections/trucks';

// Coop worked on this, might need to double check the create function below

const AddTruck = Backbone.View.extend({
  tagName: 'div',
  className: 'newTruck',
  template: function (){
    var toReturn = `
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
    <input type="text" placeholder="Type of Cuisine" value="">
    `;

    if (true){
      toReturn += '<input class="make-edit" type="button" name="make-edit" value="Submit">';
    } else {
      toReturn += '<input class="submit" type="button" name="submit" value="Submit">';
    }

    return toReturn;
  },
  render: function (editing){
    this.$el.html(this.template(editing));

  },
  events: {
    'click .submit' : 'addTruck',
    'click .make-edit' : 'editTruck'
  },
  editTruck: function(){

  },
  addTruck: function (){
    this.model = trucks.create(addTruck);
  }
});

let addTruck = new AddTruck();

export default addTruck;
