Ext.define("PlaseHolder.view.posts.PostFormController", {
  extend: "Ext.app.ViewController",
  // controller: "todogridcontroller",

  alias: "controller.postformcontroller",

  onFormReset: function () {
    let window = this.getView();
    let references = this.getReferences(); //array of references

    console.log(window.xtype);
    console.log(typeof references);
    // let ref = {
    //   postdetailsform: {},
    //   PostId: {},
    //   userId: {},
    // };
    let form = references["postdetailsform"].getForm();
    form.reset(); //reset the form

    console.log("ressetting form");

    ref["postdetailsform"], ref["userId"];
  },
  onFormSave: function () {
    let references = this.getReferences();
    let form = (references = references["postdetailsform"].getForm());
    console.log("Saving form");
    form.submit({
      method: "post",
      url: "http://3.126.66.68:3000/posts",
      sucess: function (form, action) {
        console.log(action.responseText);
      },
      failure: function (form, action) {
        console.log(action.responseText);
      },
    });
  },
});
