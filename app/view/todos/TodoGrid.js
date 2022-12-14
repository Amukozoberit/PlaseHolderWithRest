Ext.define("PlaseHolder.view.todos.TodosGrid", {
  extend: "Ext.grid.Panel",
  controller: "todogridcontroller",

  // mandatory
  //xtype to instansiate use when instantiating this view
  xtype: "todosgrid",

  store: {
    //
    type: "todos",
  },
  features: [
    {
      ftype: "grouping",
      startCollapsed: true,
      groupHeaderTpl:
        '{columnName}: {name} ({rows.length} Post{[values.rows.length > 1 ? "s" : ""]})',
    },
  ],
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
  tbar: [
    {
      xtype: "button",
      text: "Add new Post",
      listeners: {
        click: "onAddNewTodo",
      },

      // listeners: {
      //   // event name:functionname
      //   click: "onAddNewPost",
      //   // mouseover: "onAddPostMouseOver",
      // },
    },
    {
      xtype: "button",
      text: "View Todo Details",
      handler: "onViewDetails",

      // listeners: {
      //   // event name:functionname
      //   click: "onAddNewPost",
      //   // mouseover: "onAddPostMouseOver",
      // },
    },
  ],
  bbar: {
    xtype: "pagingtoolbar",
  },
  // store

  // columns
});
