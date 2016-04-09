/// <reference path="F:\Study\Angular\Chapter 16\Chapter 16\listTemplate.html" />
/// <reference path="F:\Study\Angular\Chapter 16\Chapter 16\listTemplate.html" />
angular.module("exampleApp.directives", []);
angular.module("exampleApp.directives")
    .directive("unorderedList", function () {
        return {
            link: function (scope, elem, attrs) {
                
                var productsList = scope[attrs["unorderedList"]] || scope[attrs["listSource"]];
                scope.data = productsList;
                //scope.sourceProperty = scope.$eval(attrs["listProperty"], product);

                //if (angular.isArray(productsList)) {
                //    var list = angular.element("<ul>");
                //    elem.append(list);
                //    var i = 0;
                //    angular.forEach(productsList, function (product) {
                //        //(function () {
                //        var listElement = angular.element("<li>");
                //        list.append(listElement);
                //        //listElement.text(i);
                //        i += 1;
                //        (function () {
                //            //var index = i;
                //            var watcherFunction = function (watchScope) {
                //                return watchScope.$eval(attrs["listProperty"], product);
                //            }
                //            scope.$watch(watcherFunction, function (newVal, oldVal) {
                //                //listElement.text(listElement.text() + newVal + " Value of i:" + i);
                //                listElement.text(newVal);
                //            });
                //        }());

                //    });
                //}
            },
            restrict: "EA",
            templateUrl: "listTemplate.html",
            replace: true,
            //template: function() {
            //    var template = angular.element(document.querySelector("#listTemplate"));
            //    return template.html();
            //},
            priority: 100
            //template:"<ul><li ng-repeat='product in data' >{{product[attrs['listProperty']]}}</li></ul>"
        };
         
    })
.directive("demoDirective", function () {
    return {
        link: function (scope, elem, attrs) {
            var secondFruit = elem.find("ul").children().eq(1);
            var thirdFruit = secondFruit.next();

            var theParentList = thirdFruit.parent();
            var parentContainer = elem.parent();

            secondFruit.css("font-weight", "bold");
            thirdFruit.css("background-color", "green");

            theParentList.css("border-style", "solid");

            var fourthFruit = elem.find("li").eq(3);
            fourthFruit.css("font-weight", "bolder");

            console.log(theParentList.css("border-style"));
            elem.find("li").css("color", "red");

            //add more fruits

            var list = elem.find("ul");
            var newFruit = angular.element("<li>");
            newFruit.text("Mango");
            list.append(newFruit);

            list.prepend(angular.element("<li>").text("Avacado"));
        },
        restrict: "EA",
        priority: 120,
        replace: true
    }
})
.directive("scopeDemo",function() {
        return {
            restrict: "A",
            templateUrl: function (elem, attrs) {
                return "scope.html";
            },
            scope: {
                localData: "@dataname",
                localTwoWayData: "=name",
                name: "&expr"
            },
            link: function(scope) {
                console.log(scope.localData);
            }
        };
    });