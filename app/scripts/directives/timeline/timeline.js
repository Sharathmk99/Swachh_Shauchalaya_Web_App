'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('timeline',function() {
    return {
        templateUrl:'scripts/directives/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    }
  });

angular.module('sbAdminApp').controller('TimelineCtrl',function($scope){
	$scope.datas = [];
	var temp = {"heading":"Very well maintained", "time":"1 hours ago for Public Toilet - Janpath",
	"des":"What a nice experiance of visiting a public toilet! Very Good !!!","rating":"good","class":""};
	$scope.datas.push(temp);
	temp = {"heading":"Awesome", "time":" 2 hours ago for Public Toilet - Tilak Nagar",
	"des":"I liked this new look!! Kudos to all the staff and management", "rating":"good","class":"timeline-inverted"};
	$scope.datas.push(temp);
	temp = {"heading":"Not Happy", "time":"2.5 hours ago for Public Toilet - Rajendra Nagar",
	"des":"There was very foul smell in Loo. Please check.", "rating":"bad","class":""};
	$scope.datas.push(temp);
})