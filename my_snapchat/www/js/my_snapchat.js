/*jslint browser this for */
/*global angular alert cordova window StatusBar*/

(function () {
    'use strict';
    var my_snapchat = angular.module('my_snapchat', [
        'ionic',
        'my_snapchat.controllers',
        'my_snapchat.services',
        'my_snapchat.filters'
    ]);

    my_snapchat.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

    my_snapchat.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'partials/index.html',
                controller: 'IndexCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'partials/register.html',
                controller: 'RegiLogCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'RegiLogCtrl'
            })
            .state('home', {
                url: '/home',
                abstract: true,
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })
            .state('home.options', {
                url: '/options',
                views: {
                    'home-options': {
                        templateUrl: 'partials/options.html',
                        controller: 'OptionsCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');

        $ionicConfigProvider.tabs.position('bottom');
    });
}());