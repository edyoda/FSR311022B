$(document).ready(function(){

    // Selection and FIltering
    var para = $('.todo')
    console.log(para)

    var input = $('input[type=checkbox]')
    console.log(input)

    var span = $('.test').eq(3)
    console.log(span)

    // html() and text()

    var container = $('#container')
    console.log(container.text())

    

    // Inserting, Updating, Removing
    console.log(para.eq(1).text('Make Projects'))
    var newPara = '<p class="todo">Go on a tour</p>'
    container.append(newPara)

    console.log(para)

    para = $('.todo')
    // container.remove()

    // Accessing and upding css
    para.eq(3).css('backgroundColor', 'lightblue')
    para.css({
        fontSize: '30px',
        border: '1px solid'
    })
    container.css({border: '5px solid blue', padding: '20px'})

    // Add/Remove Class

    // para.removeClass('todo')
    // para.addClass('todo')


    // Events
    $('#greet').click(function(){
        var name = prompt('Enter your Name')
        console.log(`Hey ${name}! Hope you are doing great!!`)
    })
    // $('.todo').hover(function(){
    //     console.log('Todo Hovered!')
    // })
    // $('.todo').eq(1).mouseenter(function(){
    //     $('.todo').eq(1).css('backgroundColor','orange')
    // })
    // $('.todo').eq(1).mouseleave(function(){
    //     $('.todo').eq(1).css('backgroundColor','lightcoral')
    // })

    $('.todo').eq(1).on({
        'mouseenter' : function(){
            $('.todo').eq(1).css('backgroundColor','orange')
        },
        'mouseleave' : function(){
            $('.todo').eq(1).css('backgroundColor','lightcoral')
        }
    })
})

