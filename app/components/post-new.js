import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow(){
      this.set('addNewPost', true);
    },

    save1FromForm(){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2FromComponent', params);
    }
  }
});
