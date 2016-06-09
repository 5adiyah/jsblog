import Ember from 'ember';

export default Ember.Component.extend({
  updateTaskForm: false,
  actions: {
    updateTaskForm(){
      this.set('updateTaskForm', true);
    },

    update(task){
      var params = {
        description: this.get('description'),
        category: this.get('category'),
        complete: false,
      };

      this.set('updateTaskForm', false);
      this.sendAction('update', task, params);
    },

    delete(task) {
      if (confirm('Are you sure you want to delete this task?')) {
        this.sendAction('destroyTask', task);
      }
    }
  }
});
