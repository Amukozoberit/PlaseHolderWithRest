Ext.define("PlaseHolder.store.Posts", {
  extend: "Ext.data.Store",
  // alias: store.storename
  alias: "store.posts",
  // array from json
  

  //fields
  model:'PlaseHolder.model.Posts',

  //   ajax request
  // !proxy
  proxy: {
    url: "https://jsonplaceholder.typicode.com/todos",
    type:'rest',
    reader:{
        type:'json',
        // rootProperty
    }
  },

  autoLoad:true
});
