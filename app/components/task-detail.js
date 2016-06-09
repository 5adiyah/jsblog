import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['done'],
  done: false,
  actions: {
    update(task, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          task.set(key,params[key]);
        }
      });
      task.save();
      this.transitionTo('todo');
    },


    checked(task){
      if(this.get("complete") == true){
        this.set('done', true);
      } console.log(this.get('done'));
      this.sendAction('checked')
    },

    destroyTask(task){
      console.log(task.description);
      task.destroyRecord();
      this.transitionTo('todo');
    }
  }
});
