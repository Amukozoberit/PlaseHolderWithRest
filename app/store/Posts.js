Ext.define("PlaseHolder.store.Posts", {
  extend: "Ext.data.Store",
  // alias: store.storename
  alias: "store.posts",
  // array from json
  // storeId:

  //fields
  model: "PlaseHolder.model.Posts",

  //   ajax request
  // !proxy
  proxy: {
    url: "http://3.126.66.68:3000/posts",
    // url:"http://3.126.66.68:3000/posts",
    type: "rest",
    reader: {
      type: "json",
      // rootProperty
      totalProperty:'totalCount',
      rootProperty:'rows'
    },
  },

  autoLoad: true,
  sorters: [
    {
      property: "userId",
      direction: "ASC",
    },
    {
      property: "id",
      direction: "DESC",
    },
  ],
  groupField: "userId",
  pageSize: 10,
});
