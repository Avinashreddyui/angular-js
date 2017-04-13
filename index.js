/**
 * Created by Avinash Theppala on 4/13/2017.
 */
var myApp = angular
                 .module('myModule',[])
                 .controller('myController', function ($scope) {

               var employees =[
                   {name:'Kasey',dateOfBirth:new Date('November,08,1991'),gender:'male', salary:'550000.788'},
                   {name:'Alex',dateOfBirth:new Date('August,11,1996'),gender:'male', salary:'650000'},
                   {name:'BOB',dateOfBirth:new Date('June,06,1988'),gender:'male', salary:'850000'},
                   {name:'ram',dateOfBirth:new Date('July,10,1986'),gender:'male', salary:'950000'}

               ];
$scope.employees=employees;
$scope.rowLimit=4;
$scope.sortColumn="name";
               });

