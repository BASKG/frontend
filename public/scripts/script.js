console.log('vanilla land');

$ ( () => {

  console.log('jquery land');

  const dsiCall = () => {
    // beginning of ajax post, using data from user
   $.ajax({
      url: '/api/show',
      type: 'POST',
      // body: user input goes here
      success: data => {
        console.log('data: --------------');
        console.log(data);
      }
    });
  }


      $('button').click(function() {
        const listing = $('input').val();
        getData(listing);

        console.log(listing);
    });





//Data info for graph
  var data = {
      labels: ["Manhattan", "The Bronx", "Queens", "Brooklyn", "Staten Island"],
      datasets: [
          {
              label: "The First Dataset",
              fillColor: "rgba(143, 206, 232,0.2)",
              strokeColor: "rgba(143, 206, 232,1)",
              pointColor: "rgba(143, 206, 232,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(143, 206, 232,1)",
              data: [100, 34, 21, 56, 23]
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
  var myNewChart = new Chart(ctx).Line(data, graphInfo);

});
