import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post');
  this.route('post', {path: '/post/:post_id'});
  this.route('todo');
  this.route('calender');
  this.route('calendar');
  this.route('notebook');
  this.route('codesnip');
  this.route('bookmarks');
  this.route('about');
  this.route('contact');
});

export default Router;
