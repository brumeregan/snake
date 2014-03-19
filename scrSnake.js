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
        left: Math.floor(Math.random()*285) + 'px',
        top: Math.floor(Math.random()*285) + 'px'
    });


    /*snake.style.width = '10px';
    snake.style.height = '10px';
    snake.style.border = '1px solid white';
    snake.style.backgroundColor="black";

    snake.style.margin = Math.random()*300 + 'px';
*/

    var tail = document.createElement('div');
    tail.id = 'tail';
    field.appendChild(tail);
    var tt = $('#tail');
    tt.toggleClass('snakeblock');
    tt.css({
        'background-color': 'blue'
       // top: hh.css('top'),
      //  left: parseInt(hh.css('left')) + 15 + 'px'
    });
    var rand = Math.random() * 10;
    if(rand<=2.5){
        tt.css({
            top: hh.css('top'),
            left: parseInt(hh.css('left')) - 15 +'px'
        })
    } else if(rand > 2.5 && rand <=5){
        tt.css({
            top: hh.css('top'),
            left: parseInt(hh.css('left')) + 15 +'px'
        })
    } else if(rand > 5 && rand <= 7.5){
        tt.css({
            top: parseInt(hh.css('top')) + 15 + 'px',
            left: hh.css('left')
        })
    } else{
        tt.css({
            top: parseInt(hh.css('top')) + 25 + 'px',
            left: hh.css('left')
        })
    }
console.log(rand);
    /*snake1.style.width = '10px';
    snake1.style.height = '10px';
    snake1.style.border = '1px solid white';
    snake1.style.backgroundColor ="black";
    snake1.style.margin =
        snake.style.margin + 10 + 'px';
*/
    $('.snakeblock').css({
        width: '10px',
        height: '10px',
        border: 'solid white 1px',
        position: 'absolute',
        margin: '5px'
    });




   /* fucntion (){
        var rand = Math.random();
        if(rand < 0.25){
            snake1.style.margin =
        }}*/


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