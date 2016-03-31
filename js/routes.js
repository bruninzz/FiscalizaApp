angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('menu.propostas', {
      url: '/propostas',
      views: {
        'side-menu21': {
          templateUrl: 'templates/propostas.html'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.inicio', {
      url: '/inicio',
      views: {
        'side-menu21': {
          templateUrl: 'templates/inicio.html'
        }
      }
    })
        
      
    
      
        
    .state('detalheDaProposta', {
      url: '/detalhaproposta',
      templateUrl: 'templates/detalheDaProposta.html'
    })
        
      
    
      
        
    .state('page4', {
      url: '/Login',
      templateUrl: 'templates/page4.html'
    })
        
      
    
      
        
    .state('menu.ajuda', {
      url: '/ajuda',
      views: {
        'side-menu21': {
          templateUrl: 'templates/ajuda.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.convNios', {
      url: '/convenios',
      views: {
        'side-menu21': {
          templateUrl: 'templates/convNios.html'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/Login');
  

  

});