Ext.define("PlaseHolder.store.Todos", {
  extend: "Ext.data.Store",
  // alias: store.storename
  alias: "store.todos",
  // array from json
  

  //fields
  model:'PlaseHolder.model.Todos',

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
  groupField:'userId',
  autoLoad:true,
  pageSize:5
});
