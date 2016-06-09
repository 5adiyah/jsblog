import Ember from 'ember';

export default Ember.Component.extend({
  taskDoneForm: false,
  actions: {
    taskDoneForm(){
      this.set('taskDoneForm', true);
    },

    markDone(){
      var task = this.get('task');
      task.set('complete', true);
      task.save();
      console.log(task.get('complete'));
      // this.set('taskDoneForm', false);
      $('.pleaseWork').css("text-decoration", "line-through");
    }


  }
});
