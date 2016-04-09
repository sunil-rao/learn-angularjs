angular.module("exampleApp.directives").
    directive("todos", function() {
        return {
            restrict: "E",
            controller: "mainCtrl",
            controllerAs: "todos",
            templateUrl: "Scripts/components/todos/todos.html"
        };
    });