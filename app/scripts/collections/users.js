import $ from 'jquery';
import Backbone from 'backbone';
import User from '../models/user';

const Users = Backbone.Collection.extend({
  url: `https://warm-brook-49316.herokuapp.com/users`,
  model: User
});

export default Users;
