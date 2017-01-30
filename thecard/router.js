(function(){
    angular.module('TheCard',['ui.router', 'ngFileUpload'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('login',{
            url:'/login',
            templateUrl:'thecard/authentication/login.html',
            controller:'loginController'
            
        }).state('register', {
            url:'/register',
            templateUrl:'thecard/register/register.html',
            controller:'regController'
        }).state('cvs',{
            url:'/cvs',
            templateUrl:'thecard/cvs/cvs.html',
            controller:'cvController'
        }).state('music',{
             url:'/music',
            templateUrl:'thecard/music/music.html',
            controller:'musicController'
        }).state('hire',{
            url:'/hire',
            templateUrl:'thecard/hire/hire.html',
            controller:'hireController'
        }).state('ads',{
            url:'/ads',
            templateUrl:'thecard/ads/ads.html',
            controller:'adsController'
        }).state('main',{
            url:'/',
            templateUrl:'thecard/main/main.html',
            controller:'mainController'
        }).state('dashboard',{
            url:'/dashboard',
            templateUrl:'thecard/dashboard/dashboard.html',
            controller:'dashboardController'
        }).state('profile',{
            url:'/profile',
            templateUrl:'thecard/profile/profile.html',
            controller:'profileController'
        }).state('cvmaker', {
            url: '/cvmaker',
            templateUrl: 'thecard/cvs/cv-plantform.html',
            controller: 'cvmaker'
        }).state('addproducts', {
            url: '/addproducts',
            templateUrl: 'thecard/ads/addproducts.html',
            controller: 'addproducts'
        }).state('community', {
            url: '/createcommunity',
            templateUrl: 'thecard/community/communityform.html',
            controller: 'community'
        });
        
    })
}())