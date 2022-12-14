Ext.define("PlaseHolder.view.posts.PostsGrid", {
  extend: "Ext.grid.Panel",
  controller: "postsgridcontroller",
  // controller: "main",

  // mandatory
  //xtype to instansiate use when instantiating this view
  xtype: "postsgrid",
  // features:{
  //   [ftype:'grouping',]},

  features: [
    {
      ftype: "grouping",
      startCollapsed: true,
      groupHeaderTpl:
        '{columnName}: {name} ({rows.length} Post{[values.rows.length > 1 ? "s" : ""]})',
    },
  ],

  store: {
    //
    type: "posts",
  },
  // selModel: {
  //   // type:"cellmodel",
  //   type: "checkboxmodel",
  //   mode: "MULTI",
  // },
  // selModel:'checkboxModel'
  // scrollable:true,
  selModel: {
    // type:"cellmodel",
    /** vscode-extjs-ignore-4 */
    type: "checkboxmodel",
    // cellmodel,dataviewmodel,default
    mode: "SINGLE",
  },
  columns: [
    // {
    //     "userId":1,
    //     "id":1,
    //     "title":"delected",
    //     "completed":false

    // }
    { xtype: "rownumberer" },

    {
      text: "user ID",
      dataIndex: "userId",
    },
    {
      text: "Post ID",
      dataIndex: "_id",
    },
    {
      text: "Title",
      dataIndex: "title",
      flex: 1,
      // take 1/4 rem space
      sortable: false,
    },
    {
      text: "BODY",
      dataIndex: "body",
      flex: 3,
      // take rem space
    },
  ],
  // bbar:[
  //   {xtype:}
  // ]

  // store

  // columns
  tbar: [
    {
      xtype: "button",
      text: "Add new Post",

      listeners: {
        // event name:functionname
        click: "onAddNewPost",
        // mouseover: "onAddPostMouseOver",
      },
    },
    {
      xtype: "button",
      text: "Remove selected",
      handler: "onViewPostDetails",
    },
    {
      xtype: "button",
      text: "view Post",
    },
    {
      xtype: "textfield",
      text: "search",
    },
    {
      xtype: "tbfill",
    },
    {
      xtype: "button",
      text: "Second last",
    },
    {
      xtype: "button",
      text: "Last",
    },
  ],
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
    displayMsg: "Displaying posts {0} - {1} of {2}",
    emptyMsg: "No topics to display",
  },
});