angular.module("exampleApp", ["exampleApp.controllers", "exampleApp.directives"]);

angular.module("exampleApp.controllers", [])
    .controller("mainCtrl", function($scope) {
        $scope.greetings = "Hello World!";
        $scope.showToDo = true;
        $scope.message = "Click me";

        $scope.todos = [
            { Task: "Learn Angular", Status: "In Progress" },
            { Task: "Learn powershell", Status: "Done" },
            { Task: "Learn Teamcity", Status: "ToDo" },
            { Task: "Passport Update", Status: "In Progress" },
            { Task: "Learn C# 6.0 in a Nutshell", Status: "Blocked" }
        ];

        $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        $scope.partialViewPath = function() {
            return "table.html";
        };

        $scope.docLoad = function () {
            $scope.greetings = "You loaded a partial view";
        };

        $scope.mouseevents = function(e) {
            $scope.greetings = "You fired " + e.type;
        };
    });

angular.module("exampleApp.directives", []);

angular.module("exampleApp.directives")
.directive("customEventDirective", function() {
        return function(scope, elem, attrs) {
            elem.on("click", function() {
                scope.message = "You clicked the custom directive element";
                scope.$apply();
            });
        };
    });