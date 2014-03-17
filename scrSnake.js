/**
 * Created by kerkins on 17.03.14.
 */
$(document).ready(function(){

    var field = document.getElementById('gameDiv');
    var snake = document.createElement('div');

    snake.style.width = '10px';
    snake.style.height = '10px';
    snake.style.border = '1px solid white';
    snake.style.backgroundColor="black";
    snake.style.margin = Math.random()*300 + 'px';

    field.appendChild(snake);

    var snake1 = document.createElement('div');
    snake1.style.width = '10px';
    snake1.style.height = '10px';
    snake1.style.border = '1px solid white';
    snake1.style.backgroundColor ="black";
    snake1.style.margin =
        snake.style.margin + 10 + 'px';
   /* fucntion (){
        var rand = Math.random();
        if(rand < 0.25){
            snake1.style.margin =
        }}*/
    field.appendChild(snake1);

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


})