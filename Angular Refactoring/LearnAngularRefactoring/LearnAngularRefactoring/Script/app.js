var app = angular.module("contestantApp", []);

app.controller('ContestantsCtrl', function () {
    this.contestants = [
      { firstName: 'Rachel', lastName: 'Washington' },
      { firstName: 'Joshua', lastName: 'Foster' },
      { firstName: 'Samuel', lastName: 'Walker' },
      { firstName: 'Phyllis', lastName: 'Reynolds' }
    ];
});


app.controller('ContestantEditorCtrl', function ($scope) {
    this.contestant = {};
    this.save = function () {
        $scope.ctrl.contestants.push(this.contestant);
        this.contestant = {};
    };
});