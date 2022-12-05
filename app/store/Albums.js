Ext.define("PlaseHolder.store.Albums", {
  extend: "Ext.data.Store",
  // alias: store.storename
  alias: "store.albums",
  // array from json

  //fields
  model: "PlaseHolder.model.Albums",

  //   ajax request
  // !proxy
  proxy: {
    url: "https://jsonplaceholder.typicode.com/albums",
    type: "rest",
    reader: {
      type: "json",
      // rootProperty
    },
  },

  autoLoad: true,
});
