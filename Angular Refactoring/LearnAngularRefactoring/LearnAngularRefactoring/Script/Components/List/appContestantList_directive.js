app.directive("appContestantList", function () {
    return {
        restrict: "E",
        scope: {
        },
        templateUrl: "Script/components/List/appContestantList.html",
        replace: true,
        controller: listController,
        controllerAs: "list"
    };

    function listController() {
        this.contestants = [
      { firstName: 'Rachel', lastName: 'Washington' },
      { firstName: 'Joshua', lastName: 'Foster' },
      { firstName: 'Samuel', lastName: 'Walker' },
      { firstName: 'Phyllis', lastName: 'Reynolds' }
        ];
    }
});