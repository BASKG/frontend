console.log('vanilla land');

$ ( () => {

  console.log('jquery land');

  // beginning of ajax post, using data from user
  $.ajax({
    url: 'localhost:4000',
    type: 'GET',
    success: data => {
      console.log('data');
    }
  });

});
