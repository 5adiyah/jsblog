import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('task');
  },
  actions: {
    save3(params){
      var newTask = this.store.createRecord('task', params);
      newTask.save();
      this.transitionTo('todo');
    }
  }
});
