function game (){
    head_x = head_x + denta_x;
    head_y = head_y + denta_y;
    if(head_x<0) head_x = width-1;
    if(head_y<0) head_y = width-1;
    if(head_x>width-1) head_x=0;
    if(head_y>width-1) head_y=0; 
    document.querySelector("#music").play();

    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,canv.width,canv.height);
    for(var i=0;i<snake.length;i++){
        ctx.fillStyle="yellow";
        ctx.fillRect(snake[i].x*unit,snake[i].y*unit,unit-2,unit-2);
        if(snake[i].x==head_x && snake[i].y==head_y && snake.length>=2){

            clearInterval(set);
            ctx.font="30px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText("game over",135,200);
            document.getElementById("replay").style.display = "initial";
            document.querySelector("#music").pause();
        }
    }
    snake.push({x:head_x,y:head_y});
    while(snake.length>snake_length){
        snake.shift();
    }
    if(food_x==head_x  && food_y == head_y){
        document.querySelector('#eat-audio').play();
        snake_length++;
        food_x = Math.floor(Math.random()*width);
        food_y = Math.floor(Math.random()*width);
    }
    ctx.fillStyle="red";
    ctx.fillRect(food_x*unit,food_y*unit,unit-2,unit-2);
}