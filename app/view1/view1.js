'use strict';

angular.module('myApp.home', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
      $stateProvider.state("home", {//父路由
            url: '/',
            template:' <div ui-view>home</div>'
          })
    }])
    .controller('View2Ctrl', [function() {

    }]);