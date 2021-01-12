document.addEventListener("DOMContentLoaded", function(event) { 
    
    const validate_full_name =  function(e){
        const input_value = e.target.value;
        const full_name_regex = /^[A-Za-z\s]+$/;

        if (full_name_regex.test(input_value)){
            document.getElementById('full_name_error').style.display = 'none';
        } else {
            document.getElementById('full_name_error').style.display = 'block';
        }
    }
    const validate_email = function(e){
        const input_value = e.target.value;
        const email_reges = /\S+@\S+\.\S+/;

        if (email_reges.test(input_value)){
            document.getElementById('email_error').style.display = 'none';

        } else {
            document.getElementById('email_error').style.display = 'block';
        }
    }

    const validate_section = function(e){
        if( e.target.options[e.target.selectedIndex].value === ''){
            document.getElementById('section_error').style.display = 'block';
        } else {
            document.getElementById('section_error').style.display = 'none';
        }
    }

    const validate_seat = function(e){
        if( e.target.options[e.target.selectedIndex].value === ''){
            document.getElementById('seat_error').style.display = 'block';
        } else {
            document.getElementById('seat_error').style.display = 'none';

        }
    }

    function validateForm() {
        var full_name = document.forms["ticket_form"]["full_name"];
        var email = document.forms["ticket_form"]["email"];
        var section = document.forms["ticket_form"]["section"];
        var seat = document.forms["ticket_form"]["seat"];
        full_name.addEventListener('input', validate_full_name);
        email.addEventListener('input', validate_email);
        section.addEventListener('input', validate_section);
        seat.addEventListener('input', validate_seat);
    }

    validateForm();

});