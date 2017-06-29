'use strict';

angular.module('myApp.save', ['ui.router'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state("home.save", {//子路由
                url: '/save',
                template: '<div>save</div>'
            })
    }])
    .controller('View2Ctrl', [function () {

    }]);