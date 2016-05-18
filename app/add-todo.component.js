System.register(['angular2/core', './todo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1;
    var AddTodo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            AddTodo = (function () {
                function AddTodo() {
                }
                AddTodo.prototype.addTodo = function (title, description, responsible) {
                    this.todos.push(new todo_1.Todo(title, description, responsible));
                };
                AddTodo = __decorate([
                    core_1.Component({
                        selector: 'add-todo',
                        inputs: ['todos'],
                        template: "\n\t  <div class=\"panel panel-default\">\n\t\t  <div class=\"panel-heading\">\n\t\t    <h3 class=\"panel-title\"><span class=\"glyphicon glyphicon-plus-sign\"></span> Add New Todo</h3>\n\t\t  </div>\n\t\t  <div class=\"panel-body\">\n\t\t    <div class=\"form-group\">\n\t\t      <label for=\"titleInput\">Title:</label>\n\t\t      <input id=\"titleInput\" class=\"form-control\" placeholder=\"Title\" #title>\n\t\t    </div>\n\t\t    <div class=\"form-group\">\n\t\t      <label for=\"descriptionInput\">Description:</label>\n\t\t      <input id=\"descriptionInput\" class=\"form-control\" placeholder=\"Description\" #description>\n\t\t    </div>\n\t\t    <div class=\"form-group\">\n\t\t      <label id=\"responsibleInput\">Responsible:</label>\n\t\t      <input id=\"responsibleInput\" class=\"form-control\" placeholder=\"Responsible\" #responsible>\n\t\t    </div>\n\t\t    <div>\n\t\t      <button class=\"btn btn-default\" (click)=\"addTodo(title.value, description.value, responsible.value)\">Add Todo</button>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddTodo);
                return AddTodo;
            }());
            exports_1("AddTodo", AddTodo);
        }
    }
});
//# sourceMappingURL=add-todo.component.js.map