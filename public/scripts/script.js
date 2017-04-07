console.log('vanilla land');

$ ( () => {

  console.log('jquery land');


      $('#submit').submit(function(e){
        e.preventDefault();

        let info = $('input').val();
        console.log(info);

        $.ajax({
          url: 'http://localhost:4000/predict',
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
                $('.yes-or-no').html('WHAT A DEAL!<br><span class="italics">You save $' + parseFloat(data.predicted_price - data.actual_price).toFixed(2) + ' below the average price in this area!</span>').addClass('yes');
                $('.button-airbnb').html('<button class="yes-button">Book Now!</button>');
                $('.yes-button').on('click', function() {
                  window.open('https://www.airbnb.com/rooms/'+ info);
                });

            } else {
                $('.yes-or-no').append('NO WAY!<br><span class="italics">This price is $'+ parseFloat(data.actual_price - data.predicted_price).toFixed(2) + ' above the average price in this area!</span>').addClass('no');
                $('.button-airbnb').html('<button class="no-button">Find something new...</button>');
                $('.no-button').on('click', function() {
                  window.open('https://www.airbnb.com/')
            });
            }
            }
        });
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
