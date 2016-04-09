angular.module("exampleApp", ["exampleApp.controllers", "exampleApp.directives",
                           "exampleApp.filters", "exampleApp.services"]).config(function() {
    console.log("Config of main module called...");
}).run(function() {
    console.log("Run of main module called...");
});

angular.module("exampleApp.controllers", [])
    .controller("mainCtrl", function($scope, today) {
        $scope.Greetings = "Hello World!";
        $scope.name = "Sunil";
        $scope.date = today.date;
    }).config(function() {
        console.log("Config of exampleApp.controllers module called...");
    }).run(function() {
        console.log("Run of exampleApp.controllers module called...");
    });

angular.module("exampleApp.directives", [])
    .directive("highlight", function() {
        return function(scope, element, attrs) {
            scope.directiveUsage = "You applied directive to " + element.text() + ". You said " + attrs["highlight"];
        };
    })
    .directive("userName", function($filter) {
        var greetingsFilter = $filter("greetings");
        return function(s, el, at) {
            return greetingsFilter(at["userName"]);
        };
    });


angular.module("exampleApp.filters", [])
    .filter("greetings", function() {
        return function(name) {
            return "Hello " + name;
        };
    });

angular.module("exampleApp.services", [])
.service("today", function () {
        this.date = new Date();
    });