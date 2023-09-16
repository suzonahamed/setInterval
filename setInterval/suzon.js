let button=document.querySelector(".btn");
let message=document.querySelector(".message");

button.addEventListener("click",display);
function display()
{
    message.textContent="Hi, Riyon, Now i am counting....let start";

    let count=0;
    setInterval(suzon,1000)
    function suzon()
    {
        count++;
     message.textContent=count;
    }
     
}




