angular.module("exampleApp.directives", []);
angular.module("exampleApp.directives")
    .directive("unorderedList", function () {
        return function (scope, elem, attrs) {
            var attrValue = attrs["unorderedList"];
            var productsList = scope[attrValue];

            if (angular.isArray(productsList)) {
                var list = angular.element("<ul>");
                elem.append(list);
                var i = 0;
                angular.forEach(productsList, function (product) {
                    //(function () {
                    var value = scope.$eval(attrs["listProperty"], product);
                    var listElement = angular.element("<li>");
                    list.append(listElement);
                    //listElement.text(i);
                    i += 1;
                    (function () {
                        //var index = i;
                        var watcherFunction = function (watchScope) {
                            return watchScope.$eval(attrs["listProperty"], product);
                        }
                        scope.$watch(watcherFunction, function (newVal, oldVal) {
                            //listElement.text(listElement.text() + newVal + " Value of i:" + i);
                            listElement.text(newVal);
                        });
                    }());

                });
            }
        };
    })
.directive("demoDirective", function () {
    return function (scope, elem, attrs) {
        var secondFruit = elem.children().children().eq(1);
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

        var list = elem.children().eq(0);
        var newFruit = angular.element("<li>");
        newFruit.text("Mango");
        list.append(newFruit);

        list.prepend(angular.element("<li>").text("Avacado"));
    };
});