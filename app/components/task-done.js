import Ember from 'ember';

export default Ember.Component.extend({
  taskDoneForm: false,
  actions: {
    taskDoneForm(){
      this.set('taskDoneForm', true);
    },

    markDone(){
      // debugger;
      // var params = {
      //   description: this.get('description'),
      //   category: this.get('category'),
      //   complete: true,
      // };
      var task = this.get('task');
      console.log(task.get('complete'));
      // debugger;
      task.set('complete', true);
      task.save();
      console.log(task.get('complete'));
      this.set('taskDoneForm', false);
      // this.sendAction('markDone', task, params);
    }
  }
});
