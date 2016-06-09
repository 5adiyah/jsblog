import Ember from 'ember';

export default Ember.Component.extend({
  updateTaskForm: false,
  actions: {
    updateTaskForm(){
      this.set('updateTaskForm', true);
    },

    update(task){
      var params = {
        task: this.get('task'),
        category: this.get('category'),
        complete: false,
      };

      this.set('updateTaskForm', false);
      this.sendAction('update', task, params);
    }
  }
});
