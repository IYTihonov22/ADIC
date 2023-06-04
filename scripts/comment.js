$(function () {
    $('#comment_form').on('submit', function (e) {
      e.preventDefault();
  
      const formData = $('#comment_form').serialize();
  
      $.ajax({
        type: 'post',
        url: 'http://localhost:3000/saveFormData',
        data: formData,
        success: function () {
          alert('Form data has been saved!');
        },
        error: function () {
          alert('An error occurred while saving the form data.');
        },
      });
    });
  });
  