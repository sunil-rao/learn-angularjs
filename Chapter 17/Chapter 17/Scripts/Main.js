angular.module("exampleApp", ["exampleApp.directives", "exampleApp.controllers"]);

angular.module("exampleApp.controllers", []);
angular.module("exampleApp.controllers")
    .controller("mainCtrl", function ($scope) {
        $scope.products = [
            { Name: "Apple", Category: "Fruit", Price: 12 },
            { Name: "Oranges", Category: "Fruit", Price: 13 },
            { Name: "Kiwi", Category: "Fruit", Price: 14 },
            { Name: "Grapes", Category: "Fruit", Price: 15 },
            { Name: "Pear", Category: "Fruit", Price: 16 },
            { Name: "Blue berries", Category: "Fruit", Price: 17 },
            { Name: "Cucumber", Category: "Vegetable", Price: 18 }
        ];

        $scope.hikePrice = function () {
            angular.forEach($scope.products, function (product) {
                product.Price += 1;
            });
        };
    })
.controller("scopeCtrl", function ($scope) {
    $scope.name = "Mark";
    $scope.data = { name: "Kevin" };

    $scope.complexExpression = function (name) {
        return name;
    }
});