Ext.define("PlaseHolder.model.Posts", {
  extend: "Ext.data.Model",
  idProperty:'_id',

  fields: [
    { name: "userId", type: "integer" },
    { name: "_id", type: "integer" },
    { name: "title", type: "string" },
    { name: "body", type: "string" },
  ],
});