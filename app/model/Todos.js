Ext.define("PlaseHolder.model.Todos", {
  extend: "Ext.data.Model",
  fields: [
    { name: "userId", type: "integer" },
    { name: "id", type: "integer" },
    { name: "title", type: "string" },
    { name: "completed", type: "boolean" },
  ],
});