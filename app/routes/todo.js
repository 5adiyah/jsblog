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
    },
    update(task, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          task.set(key,params[key]);
        }
      });
      task.save();
      this.transitionTo('todo');
    },
    destroyTask(task){
      task.destroyRecord();
      this.transitionTo('todo');
    },
  }
});
