/**
 * Created by kerkins on 17.03.14.
 */
$(document).ready(function(){

    var field = document.getElementById('gameDiv');
    var head = document.createElement('div');
    head.id = "head";
    field.appendChild(head);
    var hh = $('#head');
    hh.toggleClass('snakeblock');
    hh.css({
        backgroundColor: 'red',
        left: Math.floor(Math.random()*280) + 'px',
        top: Math.floor(Math.random()*280) + 'px'
    });

    var tail = document.createElement('div');
    tail.id = 'tail';
    field.appendChild(tail);
    var tt = $('#tail');
    tt.toggleClass('snakeblock');
    tt.css({
        'background-color': 'blue'

    });
    var rand = Math.random() * 10;
    if(rand<=2.5){
        tt.css({
            top: hh.css('top'),
            left: parseInt(hh.css('left')) - 12 +'px'
        })
    } else if(rand > 2.5 && rand <=5){
        tt.css({
            top: hh.css('top'),
            left: parseInt(hh.css('left')) + 12 +'px'
        })
    } else if(rand > 5 && rand <= 7.5){
        tt.css({
            top: parseInt(hh.css('top')) - 12 + 'px',
            left: hh.css('left')
        })
    } else{
        tt.css({
            top: parseInt(hh.css('top')) + 12+ 'px',
            left: hh.css('left')
        })
    }
console.log(rand);

    $('.snakeblock').css({
        width: '10px',
        height: '10px',
        border: 'solid white 1px',
        position: 'absolute',
        margin: '5px'
    });


for(var i = hh.css('top'); i<300; i+=10){
    $('#head').animate(
    hh.css({
        top: parseInt(hh.css('top')) + 12 + 'px',
        left: hh.css('left')
    })
    )
}



  /*  function pressK(key){
        switch(key){
            case '37':
                //LEFT
                //
                break;
            case '39':
                //right
                break;
            case '38':
                //down
                break;
            case '40':
                //up
                break;
            default: break;
        }
        return false;
    };*/


});