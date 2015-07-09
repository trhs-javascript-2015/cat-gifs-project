import DS from 'ember-data';

let gif = DS.Model.extend({
  location: DS.attr('string'),
  title: DS.attr('string')
});

gif.reopenClass({
  FIXTURES: [
    { id: 1, location: 'http://i.imgur.com/pMq2UNv.gif', title: 'Curious Cat' },
    { id: 2, location: 'http://i.imgur.com/wKCQ9C5.gif', title: 'Ingenious' }
  ]
});

export default gif;
