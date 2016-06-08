import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post');
  },

  actions: {
    destroyPost(post){
      post.destroyRecord();
      this.transitionTo('index');
    },

    save3FromRoute(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
