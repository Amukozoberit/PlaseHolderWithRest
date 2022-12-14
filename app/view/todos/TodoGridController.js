Ext.define("PlaseHolder.view.todos.TodoGridController", {
  extend: "Ext.app.ViewController",

  alias: "controller.todogridcontroller",

 
  onAddNewTodo:function(){
    console.log('add new todo');
  }
  ,onViewDetails:function(){
    console.log('view post details clicked');

  }
});
