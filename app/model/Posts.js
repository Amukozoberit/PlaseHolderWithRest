Ext.define("PlaseHolder.model.Posts", {
  extend: "Ext.data.Model",
  fields: [
    { name: "userId", type: "integer" },
    { name: "id", type: "integer" },
    { name: "title", type: "string" },
    { name: "body", type: "string" },
  ],
});