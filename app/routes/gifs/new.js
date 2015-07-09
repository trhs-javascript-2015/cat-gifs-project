import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('gif');
  },
  actions: {
    submit: function () {
      if (this.currentModel.get('location')) {
        this.currentModel.save();
      }

      this.transitionTo('gifs');
    }
  }
});
