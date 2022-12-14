Ext.define("PlaseHolder.view.post.PostForm", {
  extend: "Ext.window.Window",
  xtype: "postform",
  controller: "postformcontroller",
  title: "Add Post",

  width: 400,
  maximizable: true,
  minimizable: true,
  modal: true,
  autoshow: true,
  layout: "fit",
  items: [
    {
      xtype: "form",
      layout: "form",
      reference: "postdetailsform",
      jsonSubmit:true,
      items: [
        {
          xtype: "numberfield",
          reference: "userId",
          fieldLabel: "userid",
          name:'userId'
        },
        {
          xtype: "numberfield",
          reference: "PostId",
          
          fieldLabel: "PostId",
          name:'id'
        },
        {
          xtype: "textfield",
          
          fieldLabel: "Title",
          name:'title'
        },
        {
          xtype: "textfield",
          name:'body',
          fieldLabel: "Body",
        },
      ],
      buttons: [
        {
          xtype: "button",
          text: "Reset",
          handler: "onFormReset",
        },
        {
          xtype: "button",
          text: "Save",
          handler: "onFormSave",
        },
      ],
    },
  ],
});