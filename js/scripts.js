$('document').ready(function() {
    
    /* validation */
    $("#regForm").validator({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            usn: {
                required: true
            },
            college: {
                required: true
            },
            course: {
                validators: {
                    notEmpty: {
                        message: 'This field cannot be left blank.'
                    }
                }
            },
            semester: {
                validators: {
                    notEmpty: {
                        message: 'This field cannot be left blank.'
                    }
                }
            }
        },
        messages: {
            lastName: {
                required: "enter your password"
            }
        }
    })
    .on('success.form.fv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target),
            fv = $form.data('validate');

        // Use Ajax to submit form data
        $.ajax({
            url: $form.attr('action'),
            type: 'POST',
            data: $form.serialize(),
            success: function(result) {
                // Process the response returned by the server ...
                console.log(responseText);
            }
        });
    });
});