import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gifs', { path: '/' }, function () {
    this.route('view', { path: ':id' });
    this.route('new');
  });
});

export default Router;
