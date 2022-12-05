Ext.define("PlaseHolder.view.posts.PostsGrid", {
  extend: "Ext.grid.Panel",

  // mandatory
  //xtype to instansiate use when instantiating this view
  xtype:'postsgrid',

  store: {
    //
    type: "posts",
  },
  columns: [
    // {
    //     "userId":1,
    //     "id":1,
    //     "title":"delected",
    //     "completed":false

    // }
    {
      text: "user ID",
      dataIndex: "userId",
    },
    {
      text: "Todo ID",
      dataIndex: "id",
    },
    {
      text: "Title",
      dataIndex: "title",
    },
    {
      text: "BODY",
      dataIndex: "body",
    },
  ],

  // store

  // columns
});