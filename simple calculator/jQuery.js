$(document).ready(function () {

    let sign, firstNumber, secondNumber, answer = "", x = "";
    

    result = function () {
        secondNumber = parseFloat(x);
        x = "";
        if (sign == 0) {
            answer = firstNumber + secondNumber;
        }
        else if (sign == 1) {
            answer = firstNumber - secondNumber;
        }
        else if (sign == 2) {
            answer = firstNumber * secondNumber;
        }
        else if (sign == 3) {

            if (secondNumber == 0)
                answer = 'infinity';
            else
                answer = firstNumber / secondNumber;
        }
        else {
            answer = "";
        }
        $('#display').html(answer);
    }

    

     takeDecimal = function() {
        x += $('#.').val();
        $('#display').html(x);
    }
     takeZero = function() {
        x += $('#0').val();
        $('#display').html(x);
    }

     takeOne = function() {
        x += $('#1').val();
        $('#display').html(x);
    }
     takeTwo = function() {
        x += $('#2').val();
        $('#display').html(x);
    }

     takeThree = function() {
        x += $('#3').val();
        $('#display').html(x);
    }
     takeFour = function() {
        x += $('#4').val();
        $('#display').html(x);
    }

     takeFive = function() {
        x += $('#5').val();
        $('#display').html(x);
    }

     takeSix = function() {
        x += $('#6').val();
        $('#display').html(x);
    }

     takeSeven = function() {
        x += $('#7').val();
        $('#display').html(x);
    }
     takeEight = function() {
        x += $('#8').val();
        $('#display').html(x);
    }

     takeNine = function() {
        x += $('#9').val();
        $('#display').html(x);
    }

    addition = function () {
        firstNumber = parseFloat(x);
        sign = 0;
        x = "";
        $('#display').html(x);
    }
    subtraction = function () {
        firstNumber = parseFloat(x);
        sign = 1;
        x = "";
        $('#display').html(x);
    }
    multiplication = function () {
        firstNumber = parseFloat(x);
        sign = 2;
        x = "";
        $('#display').html(x);
    }
    division = function () {
        firstNumber = parseFloat(x);
        sign = 3;
        x = "";
        $('#display').html(x);
    }
});