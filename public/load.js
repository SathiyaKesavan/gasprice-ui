var gasPriceApp = angular.module('gasPriceApp', []);


  gasPriceApp.run(function($rootScope) {
    console.log('hello')
  });

gasPriceApp.controller('gasPriceController',  ['$scope', '$sce', '$http',  function($scope, $sce, $http) {
  var xLabels = [];
  var yLabels = [];
  $scope.init = function () {
    console.log('hello body')
    var url = "https://gas-price-service.herokuapp.com/gasprice/tamilnadu"
    $http.get(url)
          .then(function(response){
              $scope.responseData = response.data;
              $scope.districtList = $scope.responseData.districtPrices;
          });
    var chartUrl = "https://gas-price-service.herokuapp.com/gasprice/trend"
    $http.get(chartUrl)
          .then(function(response){
              for(var key in response.data.gasPriceTrendList) {
                //console.log("key " + key + " has value " + response.data[key].date);
                xLabels.push(response.data.gasPriceTrendList[key].date);
                yLabels.push(response.data.gasPriceTrendList[key].price);
              }
              chartIt();
          });

  }



  const chartIt = function()  {

    var ctx = document.getElementById('myChart')

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xLabels,
        datasets: [{
          data: yLabels,
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  }




}]);
