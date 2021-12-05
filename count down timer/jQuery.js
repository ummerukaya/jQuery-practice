$(document).ready(function () {

    let eventDate, date, today, difference, day, hour, min, sec;

    takeDate = function() {
        eventDate = $('#eventdate').val();
        $('#countdowntimer').css('display','block');
        date = new Date(eventDate).getTime();
        //console.log(date-today);

            interval = setInterval(function () {
            today = new Date().getTime();
            difference = date - today;
            day = Math.floor(difference / (1000 * 24 * 60 * 60));
            difference = (difference % (1000 * 24 * 60 * 60));
            hour = Math.floor(difference / (1000 * 60 * 60));
            difference = (difference % (1000 * 60 * 60));
            min = Math.floor(difference / (1000 * 60));
            difference = (difference % (1000 * 60));
            sec = Math.floor(difference / 1000);
            let showTime = day + " days | " + hour + " hrs | " + min + " min | " + sec + " sec";
            $('#countdowntimer').html(showTime);

            if(difference<0){
                clearInterval(interval);
                $('#countdowntimer').html('end');
            }
        }, 1000);
    }



});