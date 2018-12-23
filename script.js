$(document).ready(function () {


    var saveBtn = $('#save-btn');

    var _this = null;


    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function clearAllInput() {
        $('#id').val("");
        $('#name').val("");
        $('#mail').val("");
        $('#class').val("");
        $('#year').val("");
        $('#city').val("");
        $('#country').val("");
    }

    saveBtn.click(function () {
        var id = $('#id').val();
        var name = $('#name').val();
        var email = $('#mail').val();
        var sClass = $('#class').val();
        var year = $('#year').val();
        var city = $('#city').val();
        var country = $('#country').val();
        console.log(id, name, email, sClass, year, city, country);

        if (id === "") {
            return alert('enter id');
        }
        if (name === "" && !(name.length > 4)) {
            return alert("please enter name with min 5 letter")
        }
        if (!validateEmail(email)) {
            return alert('enter valid emailid')
        }
        if (sClass === '') {
            return alert('please enter class')
        }
        if (year === "") {
            return alert('please enter year')
        }
        if (city === '') {
            return alert("please enter city");
        }
        if (country === '') {
            return alert('please enter countery');
        }

        var tr = $('<tr></tr>')

        var td = $('<td></td>');


        $('tbody').append(tr.append(
            `
                <td class="t-id">${id}</td>
                <td class="t-name">${name}</td>
                <td class="t-email">${email}</td>
                <td class="t-sClass">${sClass}</td>
                <td class="t-year">${year}</td>
                <td class="t-city">${city}</td>
                <td class="t-country">${country}</td>
                <td>
                <button class='edit-btn'> Edit</button>
                <button class='del-btn' >Delete</button>
                </td> `

        ));

        clearAllInput();

    })

    $('tbody').on('click', '.edit-btn', function () {
        console.log($(this).parent().parent(), $(this).children(".t-id").text());
        _this = $(this).parent().parent();

        $('#id').val(_this.children(".t-id").text());
        $('#name').val(_this.children(".t-name").text());
        $('#mail').val(_this.children(".t-email").text());
        $('#class').val(_this.children(".t-sClass").text());
        $('#year').val(_this.children(".t-year").text());
        $('#city').val(_this.children(".t-city").text());
        $('#country').val(_this.children(".t-country").text());
        $('#save-btn').hide();
        $('#edit-save-btn').show();


    })

    $('#edit-save-btn').on('click', function () {
        _this.children(".t-id").text($('#id').val());
        _this.children(".t-name").text($('#name').val());
        _this.children(".t-email").text($('#mail').val());
        _this.children(".t-sClass").text($('#class').val());
        _this.children(".t-year").text($('#year').val());
        _this.children(".t-city").text($('#city').val());
        _this.children(".t-country").text($('#country').val());

        $('#save-btn').show();
        $('#edit-save-btn').hide();
        clearAllInput();
        _this = null;
    })

    $('.clear-btn').on('click', function () {
        clearAllInput();
    })

    $('tbody').on('click', '.del-btn', function () {
        console.log($(this).parent().parent());
        ($(this).parent().parent()).remove();
    })



})