        
        width = 20;
        unit = 20;
        snake = [];
        head_x = 10; head_y = 10;
        snake_length = 1;
        denta_x = 0; denta_y = 0;
        check=0;
        food_x = 15; food_y = 15;
        window.onload=function(){
            canv= document.getElementById("game");
            ctx=canv.getContext("2d");
            ctx.fillStyle = "gray";
            ctx.fillRect(0,0,canv.width,canv.height);
            ctx.font="20px Arial";
            ctx.fillStyle = "blue";
            ctx.fillText("Nhấn phím mũi tên để bắt đầu bắt đầu",10,200);
            var x=0;
            document.addEventListener("keydown", event => {
  if (event.keyCode == 39||event.keyCode == 37||event.keyCode == 38||event.keyCode == 40) {
        x ++;
        if(x==1)
        {     document.addEventListener("keydown",button_handle);
             set = setInterval(game,200);}
  }
});
 }

        
        function button_handle(key){
            switch(key.keyCode){
                case 37: //trai
                if (check == 0|| check!=3)
                {denta_x = -1 ; denta_y = 0 ;
                check =1;}
                break;
                case 38: //len
                if(check == 0|| check!=4)
                {
                    denta_x = 0 ; denta_y = -1 ;
                    check =2;
                }
                break;
                case 39:  //phai
                if(check == 0|| check!=1)
                {denta_x = 1; denta_y = 0 ;
                check = 3;}
                break;

                case 40 : // xuong
                if(check == 0|| check!=2){
                denta_y = 1; denta_x = 0;
                check =4;}
                break;

            }
        }