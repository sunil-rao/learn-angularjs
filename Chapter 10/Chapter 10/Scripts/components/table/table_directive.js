/// <reference path="Table.html" />
angular.module("exampleApp.directives", []).
directive("table", function () {
    return {
        scope: {
            todos: "="
        },
        templateUrl: "Scripts/components/table/Table.html",
        restrict: "E",
        controller: tableCtrl,
        controllerAs: "tableCtrl"
    };

    function tableCtrl() {
        this.docLoad = function () {
            this.greetings = "You loaded a partial view";
        };
    }
});