Ext.define("PlaseHolder.view.albums.AlbumsGrid", {
  extend: "Ext.grid.Panel",

  // mandatory
  //xtype to instansiate use when instantiating this view
  xtype:'albumsgrid',

  store: {
    //
    type: "albums",
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
      text: "ALBUM ID",
      dataIndex: "id",
    },
    {
      text: "Title",
      dataIndex: "title",
    },
   
  ],

  // store

  // columns
});