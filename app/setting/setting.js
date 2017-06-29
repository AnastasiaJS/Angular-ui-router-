'use strict';

angular.module('myApp.setting', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
      $stateProvider.state("home.setting", {//父路由
            url: '/setting',
            template:'<div>setting</div>'
          })
    }])
    .controller('settingCtrl', [function() {

    }]);