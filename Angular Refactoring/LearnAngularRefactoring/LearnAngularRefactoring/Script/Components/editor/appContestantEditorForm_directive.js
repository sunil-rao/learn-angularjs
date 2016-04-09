app.directive("appContestantEditorForm", function() {
    return {
        restrict: "E",
        scope: {
            
        },
        templateUrl: "Script/components/editor/appContestantEditorForm.html",
        replace: true,
        controller: editorController,
        controllerAs: "editor",
        bindToController: {
            contestants: "="
        }
    };

    function editorController () {
        this.contestant = {};
        this.save = function () {
            this.contestants.push(this.contestant);
            this.contestant = {};
        };
    }
});