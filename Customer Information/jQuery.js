$(document).ready(function () {
    var id = 0, fname, lname, email, phone, address;
    var imageDataBase64 = "";

    $('#img').on('change', readFile);
    validateForm = function () {

        var customer = {
            ImageSrc: "",
            Name: "",
            Email: "",
            Phone: "",
            Address: ""
        }

        fname = $('#fname');
        lname = $('#lname');
        email = $('#email');
        phone = $('#phone');
        address = $('#address');

        var e = emailaddress(email);
        var p = phonenumber(phone);

        if (e == true && p == true) {
            storeCustomerInfo(customer);
        }
    }

    var emailaddress = function (enteredEmail) {
       
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailformat.test(enteredEmail.val())) {
            return true;
        }
        else {
            if (enteredEmail.value == "")
                $('#invalidEmailMsg').html('Field cannot be empty');
            else
                $('#invalidEmailMsg').html('Field should contain valid email');
            return false;
        }
    }

    var phonenumber = function (enteredPhone) {
        var phoneformat = /^0\d{10}$/;
        if (phoneformat.test(enteredPhone.val())) {
            return true;
        }
        else {
            if (enteredPhone.value == "")
                $('#invalidPhoneMsg').html('Field cannot be empty');
            else
                $('#invalidPhoneMsg').html('Field should contain valid phone number');
            return false;
        }
    }

    function readFile() {

        if (this.files && this.files[0]) {

            var FR = new FileReader();

            FR.onload = function (e) {
                imageDataBase64 = e.target.result;
            };

            FR.readAsDataURL(this.files[0]);
        }
    }

    var setCustomerInfo = function (customer) {
        customer.ImageSrc = imageDataBase64;
        customer.Name = fname.val() + " " + lname.val();
        customer.Email = email.val();
        customer.Phone = phone.val();
        customer.Address = address.val();
    }

    var storeCustomerInfo = function (customer) {

        id++;
        $('#list').css({ 'display': 'block' });

        setCustomerInfo(customer);

        localStorage.setItem(id, JSON.stringify(customer));

        for (var key in customer) {

            if (key == 'ImageSrc' && customer.hasOwnProperty(key)) {
                var photo = JSON.parse(localStorage.getItem(id))[key];
                $('#list').append($('<img>', { id: 'customerimg', src: photo }).css({ 'height': '150px', 'width': '40%' }));
            }
            else {
                var data1 = $('<div></div>');
                $('#list').append(data1);
                data1.html(key + ': ' + JSON.parse(localStorage.getItem(id))[key]);
            }

        }
    }


    var form = $("#customerInfoForm");
    function handleForm(event) { event.preventDefault(); }
    form.on('submit', handleForm);
});