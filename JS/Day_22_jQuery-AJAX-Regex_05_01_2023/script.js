$(document).ready(function(){
    // var name = $('#name')
    // var email = $('#email')
    // var mob = $('#mob')
    // var submit = $('#submit')
    // submit.click(function(e){
    //     e.preventDefault()
    //     var nameH3 = `<h3>${name.val()}</h3>`
    //     var emailH3 = `<h3>${email.val()}</h3>`
    //     var mobH3 = `<h3>${mob.val()}</h3>`
    //     $('#values').append(nameH3, emailH3, mobH3)
    // })
    $.get('https://dummyjson.com/users', function(response){
        for(var i=0;i<response.users.length;i++){
            var p = `<p>${response.users[i].id + '.  ' + response.users[i].firstName + ' ' + response.users[i].lastName}</p>`
            $('#container').append(p)
        }
    })

    var fname = $('#fname')
    var lname = $('#lname')
    var age = $('#age')
    $('#add').click(function(){
        var data = {
            "firstName" : fname.val(),
            "lastName" : lname.val(),
            "age" : age.val()
        }
        $.post('https://dummyjson.com/users/add', data, function(){
            alert("Data Added Successfully")
        })
    })


    var text = "Nature is the ultimate source of our living nature. Both living and non-living things include nature , and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans all depend on nature for their survival. It supplies oxygen, sunlight, soil, water, and other necessary components."
    var pattern = /[^aeiou]/ig
    console.log(text.match(pattern))
})