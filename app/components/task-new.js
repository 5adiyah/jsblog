import Ember from 'ember';

export default Ember.Component.extend({
  addNewTask: false,
  actions: {
    taskFormShow(){
      this.set('addNewTask', true);
    },

    save1(){
      var params = {
        task: this.get('task'),
        category: this.get('category'),
        complete: false,
      };
      this.set('addNewTask', false);
      this.sendAction('save2', params);
    }
  }
});
