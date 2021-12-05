$(document).ready(function(){
    
const tableData=["Food","Restuarant","Rating","Comments"];

validateForm = function(){
    //localStorage.clear();
    if(($('#comment').val())=='')
    {
        alert("Comment is required!");
    }
    else
    {
        storeData();
    }
   
}

function storeData(){
    $('#showForm').css({'display':'block'});

    var foods= $('#food').val();
    var restuarants= $('#restuarant').val();
    var rating = $('#rate').val();
    var comments= $('#comment').val();

    localStorage.setItem('Food',foods);
    localStorage.setItem('Restuarant',restuarants);
    localStorage.setItem('Rating',rating);
    localStorage.setItem('Comments',comments);

    var r="<tr>";
    for(var i=0;i<4;i++){
        r+="<td>"+localStorage.getItem(tableData[i])+"</td>";
    }
    r+="</tr>";
    $('#reviewTable').children('tbody').append(r);
}

var form = $("#form");
function handleForm(event) { event.preventDefault(); } 
form.on('submit', handleForm);
});




