angular.module("exampleApp", ["exampleApp.controllers", "exampleApp.directives"]);

angular.module("exampleApp.controllers", [])
    .controller("mainCtrl", function() {
        this.greetings = "Hello World!";
        this.showToDo = true;

        this.todos = [
            { Task: "Learn Angular", Status: "In Progress" },
            { Task: "Learn powershell", Status: "Done" },
            { Task: "Learn Teamcity", Status: "ToDo" },
            { Task: "Passport Update", Status: "In Progress" },
            { Task: "Learn C# 6.0 in a Nutshell", Status: "Blocked" }
        ];

        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        this.partialViewPath = function() {
            return "table.html";
        };

        this.docLoad = function () {
            $scope.greetings = "You loaded a partial view";
        };
    });