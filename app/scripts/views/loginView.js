import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';
import store from '../store';

const LoginView = Backbone.View.extend({
  tagName: 'div',
  className: 'login-container',
  events: {
    'click .user-login': 'loginFunction',
    'click .new-login': 'signupFunction'
  },
  loginFunction: function(evt){
    evt.preventDefault();
    let username = this.$('.user-name').val();
    let password = this.$('.user-password').val();
    store.session.login(username, password);

  },
  signupFunction: function(evt){
    evt.preventDefault();
    let username = this.$('.new-username').val();
    let password = this.$('.new-password').val();
    store.session.signup(username, password);
  },
  template: function(){
    return `
    <h1>Log in</h1>
    <input class="user-name" type="text" placeholder="username" />
    <input class="user-password" type="password" placeholder="password" />
    <p></p>
    <input class="user-login" type="button" value="Login" />
    <p>Don't have an account? Sign up now!</p>
    <h1>Sign-Up</h1>
    <input class="new-username" type="text" placeholder="username" />
    <input class="new-password" type="password" placeholder="password" />
    <p></p>
    <input class="new-login" type="button" value="Create Account" />
    `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

const loginView = new LoginView();
export default loginView;
