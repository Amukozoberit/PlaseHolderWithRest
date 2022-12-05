Ext.define("PlaseHolder.view.todos.TodosGrid", {
  extend: "Ext.grid.Panel",

  // mandatory
  //xtype to instansiate use when instantiating this view
  xtype:'todosgrid',

  store: {
    //
    type: "todos",
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
      text: "Completed",
      dataIndex: "completed",
    },
  ],

  // store

  // columns
});