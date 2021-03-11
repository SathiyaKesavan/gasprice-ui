var gasPriceApp = angular.module('gasPriceApp', []);


  gasPriceApp.run(function($rootScope) {
    console.log('hello')
  });

gasPriceApp.controller('gasPriceController',  ['$scope', '$filter' , '$http',  function($scope, $filter, $http) {
  var xLabels = [];
  var yLabels = [];
  $scope.init = function () {

    var url = "https://gas-price-service.herokuapp.com/gasprice/"
    //var url = "http://localhost:8103/gasprice/"
    var date = window.encodeURIComponent($filter('date')(new Date(), 'yyyyMMdd'));
    $http.get(url+date)
          .then(function(response){
              $scope.responseData = response.data;
              $scope.gasPriceList = $scope.responseData.result;
          });
    var chartUrl = "https://gas-price-service.herokuapp.com/gasprice/trend"
    //var chartUrl = "http://localhost:8103/gasprice/trend"
    $http.get(chartUrl)
          .then(function(response){
            console.log(response);
            angular.forEach(response.data.gasPricesList, function(item, index) {
              console.log(index);
              var date = item.date.substr(5,5);
              var price = $filter('filter')(item.result, {'name':'New York'})[0].gasoline;
              xLabels.push(date);
              yLabels.push(price);
              console.log(date, price);
            });

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
