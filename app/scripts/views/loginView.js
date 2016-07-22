import $ from 'jquery';
import Backbone from 'backbone';
import router from '../router';

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
    // session.login(username, password);
    console.log(`user: ${username} password: ${password}`);
  },
  signupFunction: function(evt){
    evt.preventDefault();
    let username = this.$('.new-username').val();
    let password = this.$('.new-password').val();
    // session.login(username, password, <urlForNewUsers>); optional third argument?
    // can show day-28 code as example, but this will require back-end functionality
    console.log(`user: ${username} password: ${password}`);
  },
  template: function(){
    return `
    <h1>Log in</h1>
    <input class="user-name" type="text" placeholder="username" />
    <input class="user-password" type="password" placeholder="password" />
    <input class="user-login" type="button" value="Log in" />
    <p>Don't have an account? Sign up now!</p>
    <input class="new-username" type="text" placeholder="username" />
    <input class="new-password" type="password" placeholder="password" />
    <input class="new-login" type="button" value="Create Account" />
    `;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

const loginView = new LoginView();
loginView.render();
export default loginView;
