//appname.foldername.classname
// classname,configs,callback

Ext.define(
  "PlaseHolder.view.main.MainModel",
  {
    //class to extend from
    extend: "Ext.tab.Panel",
    // xtype: unique name for a view
    xtype: "main",

    // content of the views and objects within the app pnel

    items: [
      {
        xtype: "panel",
        title: "My Todos Panel",
        items: [
          {
            xtype: "todosgrid",
          },
        ],
      },
      {
        // object type to instansiate
        xtype: "panel",
        title: "My Posts Panel",
        items: [
          {
            xtype: "postsgrid",
          },
        ],
      },
      {
        // object type to instansiate
        xtype: "panel",
        title: "My Posts Panel",
        items: [
          {
            xtype: "albumsgrid",
          },
        ],
      },
    ],
  },
  function () {
    console.log("main view has been loaded");
  }
);
