var USdata = {

    };

var USmap = new Datamap({
    element: document.getElementById("container1"),
    scope: 'usa', //currently supports 'usa' and 'world', however with custom map data you can specify your own
    projection: 'equirectangular', //style of projection to be used. try "mercator"
    height: 520, //if not null, datamaps will grab the height of 'element'
    fills: {
        defaultFill: '#EDDC4E'
    },
    geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function (geography, data) {
            var gasPriceList =  angular.element(document.querySelector('[ng-controller="gasPriceController"]')).scope().gasPriceList;
            var result = gasPriceList.filter(x=> x.name==geography.properties.name);
            var gasPrice = result[0].gasoline;
            //console.log(gasPrice);
            return '<div class="hoverinfo">' + geography.properties.name  + '  $' + gasPrice + '/gl' +'</div>';
        },
        highlightBorderWidth: 2
    }
});
USmap.labels({'customLabelText': USdata});
