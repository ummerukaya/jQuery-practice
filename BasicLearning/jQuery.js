$(document).ready(function () {

    $('#animatedDiv > h1').hide();
    $('#btn1').click(function () {
        $('#animatedDiv').show(function () {
            $('#animatedDiv > h1').show(3000, function () {
                $('#btn1').fadeToggle();
            });
        });
    });

    var sDiv = $('#animatedDiv2');
    sDiv.animate({ height: '50px' });
    $('#btn2').click(function () {
        sDiv.animate({ height: '200px' }).css('background-color', 'blue');
        sDiv.children().text("Big div");
        sDiv.children().animate({ fontSize: '10rem', opacity: '0.4' }, "slow");
    });

    var p = $('#parent');
    p.children('p').click(function () {
        var listcontainer = p.children('div');
        var list = listcontainer.children();
        listcontainer.prev().append(list);
        p.children().remove('div');
    });
});