"use strict";

$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = parseFloat($('#hours').val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid number of hours.');
            return;
        }

        var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));
        var total = hours * hourlyRate;

        $('#total').val('$' + total.toFixed(2));
    });
});

