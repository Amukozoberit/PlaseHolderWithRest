Ext.define("PlaseHolder.view.post.PostsGridController", {
  extend: "Ext.app.ViewController",
  // controller: "todogridcontroller",

  alias: "controller.postsgridcontroller",

  onAddNewPost: function () {
    console.log("heloo");
    // Ext.create("PlaseHolder.view.post.PostForm").show();
    // Ext.create({
    //   xtype: "postform", //not working
    // });
    this.showForm(null);
  },

  onViewPostDetails:function(){
    console.log('view post details')
    // get selected record from the grid
    let selectedGrid=12;

    this.showForm(selectedGrid);
  },

  // refactor logic
  showForm:function(postId){
    // Ext.create({
    //   xtype: "postform",
    // });
    console.log(postId);
    Ext.create("PlaseHolder.view.post.PostForm").show();
  }
});
