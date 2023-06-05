$(function () {
  $('#comment_form').on('submit', function (e) {
      e.preventDefault(); // Prevents the default form submission behavior to prevent page reload

      const formData = $('#comment_form').serialize(); // Serializes the form data into a query string

      $.ajax({
          type: 'post', // Specifies the HTTP method as POST
          url: 'http://localhost:3000/saveFormData', // Specifies the URL to send the AJAX request to
          data: formData, // Specifies the data to be sent in the request
          success: function () {
              alert('Form data has been saved!'); // Displays a success message if the request is successful
          },
          error: function () {
              alert('An error occurred while saving the form data.'); // Displays an error message if the request encounters an error
          },
      });
  });
});
