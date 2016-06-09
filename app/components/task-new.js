import Ember from 'ember';

export default Ember.Component.extend({
  addNewTask: false,
  actions: {
    taskFormShow(){
      this.set('addNewTask', true);
    },

    save1(){
      var params = {
        description: this.get('description'),
        category: this.get('category'),
        complete: this.get("complete") ? this.get('complete') : false,
      };
      this.set('addNewTask', false);
      this.sendAction('save2', params);
    }
  }
});
