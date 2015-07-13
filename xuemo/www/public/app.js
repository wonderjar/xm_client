// Ionic Starter App


angular.module('starter.controllers', [    ])

angular.module('starter', [
        'ionic',
        'starter.controllers',

        'service.config',
        'service.chat'
    ])


    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('app', {
                url: "/app",
                views:{
                    'app':{
                        templateUrl: 'module/app/tab/index.html'
                    }
                }
            })
            .state('chat', {
                url: '/chat',
                views: {
                    'app': {
                        templateUrl: 'module/app/chat/index.html',
                        controller: 'chatCtrl'
                    }
                }
            })
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/chat');

    }).controller('mainCtrl', [
        '$scope',
        '$state',
        'chatService', function ($scope, $state, chatService) {
            chatService.init(18);
        }
    ]);