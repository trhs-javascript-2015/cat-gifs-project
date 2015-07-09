import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gifs', { path: '/' }, function () {
    this.route('view', { path: ':id' });
  });
});

export default Router;
