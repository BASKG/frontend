console.log('vanilla land');

$ ( () => {

  console.log('jquery land');

      $('.refresh-button').on('click', function(e){
        e.preventDefault();
        window.location.reload();
      })

      $('#submit').submit(function(e){
        e.preventDefault();

        var info = $('input').val();
        console.log(info);
        console.log(info.charCodeAt());

        var linkBack = function() {
          if( info.charCodeAt() > 50) {
            return info
          } else {
            return 'https://www.airbnb.com/rooms/'+ info
          }
        }

        console.log(linkBack());

        $.ajax({
          url: 'http://ec2-54-175-131-149.compute-1.amazonaws.com/myapp/predict',
          type: 'POST',
          dataType: 'json',
          // body: user input goes here
          data: $('#submit').serialize(),
          success: (data) => {
            console.log('data: --------------');
            console.log(data);
            console.log(data.actual_price);
            console.log(data.predicted_price);


            $('#showContainer').css("visibility", "visible");
            $('.predicted-responce').append("$" + parseFloat(data.predicted_price).toFixed(2));
            $('.actual-responce').append("$" + parseFloat(data.actual_price).toFixed(2));

            if(data.predicted_price > data.actual_price) {
                $('.yes-or-no').html('<span class="yes">WHAT A DEAL!</span><br><span class="italics">You save $' + parseFloat(data.predicted_price - data.actual_price).toFixed(2) + ' below the average price in this area!</span>');
                $('.button-airbnb').html('<button class="yes-button">Book Now!</button>');
                $('.yes-button').on('click', function() {
                  window.open(linkBack());
                });

            } else {
                $('.yes-or-no').append('<span class="no">NO WAY!</span><br><span class="italics">This price is $'+ parseFloat(data.actual_price - data.predicted_price).toFixed(2) + ' above the average price in this area!</span>');
                $('.button-airbnb').html('<button class="no-button">Find something new...</button>');
                $('.no-button').on('click', function() {
                  window.open('https://www.airbnb.com/')
            });
            }
            }, error: msg => {
              console.log(msg);
            }
        });
      });

//Json data for graph on index page
var data = [{"name": "Bronx", "average": 127.62350597609561}, {"name": "Brooklyn", "average": 138.09337075868902}, {"name": "Staten Island", "average": 134.35114503816794}, {"name": "Manhattan", "average": 142.2040415788326}, {"name": "Queens", "average": 142.4081696289367}];

console.log(data[0].name);

//Data info for graph
  var dataGraph = {
      labels: [data[3].name, data[0].name, data[4].name, data[1].name, data[2].name],
      datasets: [
          {
              label: "Main",
              fillColor: "rgba(143, 206, 232,0.2)",
              strokeColor: "rgba(143, 206, 232,1)",
              pointColor: "rgba(143, 206, 232,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(143, 206, 232,1)",
              data: [parseFloat(data[3].average).toFixed(2), parseFloat(data[0].average).toFixed(2), parseFloat(data[4].average).toFixed(2), parseFloat(data[1].average).toFixed(2), parseFloat(data[2].average).toFixed(2)]
          }
      ]
  };

  var graphInfo = {
      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines : true,
      //String - Colour of the grid lines
      scaleGridLineColor : "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth : 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - Whether the line is curved between points
      bezierCurve : true,
      //Number - Tension of the bezier curve between points
      bezierCurveTension : 0.4,
      //Boolean - Whether to show a dot for each point
      pointDot : true,
      //Number - Radius of each point dot in pixels
      pointDotRadius : 4,
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth : 1,
      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,
      //Boolean - Whether to show a stroke for datasets
      datasetStroke : true,
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth : 2,
      //Boolean - Whether to fill the dataset with a colour
      datasetFill : true,
  }

  // Setup graphs
  var ctx = document.getElementById("myChart").getContext("2d");
  var myNewChart = new Chart(ctx).Line(dataGraph, graphInfo);

});
