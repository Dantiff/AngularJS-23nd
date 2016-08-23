var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
    
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        .state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
        })

  
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'Angular has become soo interesting to learn and use.'
        })

        .state('home.form', {
            url: '/form',
            templateUrl: 'partial-home-form.html'
        })

        .state('about', {
        url: '/about',
        views: {

            
            '': { templateUrl: 'partial-about.html' },

           
            'columnOne@about': { template: 'Look I am a column!' },

           
            'columnTwo@about': { 
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            }
        }
        
    });

}); 



routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});


angular.module('routerApp').controller('formCtrl', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
  $scope.master = angular.copy(user);
                        };
$scope.reset = function() {
$scope.user = angular.copy($scope.master);
};
$scope.reset();
});
