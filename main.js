var mouseEvent = "empty";
var x,y;  


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    color = "black";
    width = 1;
   
    

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {


        color = document.getElementById("color").value;
        width = document.getElementById("Width_of_line").value;

        mouseEvent = "mouseDown";
    }

   
   


canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)

    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;



        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.moveTo(x,y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
        }

        x = current_position_of_mouse_x
        y = current_position_of_mouse_y

      
        
    
       
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
