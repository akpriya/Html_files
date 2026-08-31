function clickme(){
    alert("Welcome to Javascript World...!!!")
}
function mouseoverhandler(){
    console.log("Mouse over event executed...")
    let element = document.querySelector(".hoverme");
    element.style.display = "none";
}
function mouseouthandler(){
    let element = document.querySelector(".hoverme");
    element.style.display = "";
}
document.addEventListener("valueten",(event)=>{
    console.log("Event Listener...",event.detail.message);
})
function changehandler(event){
    console.log(event.target.value);
    let value = event.target.value;
    if(value == 10){
        const myevent = new CustomEvent("valueten",{
            detail:{message:"Your entered number is 10...",},
        });
        document.dispatchEvent(myevent);
    }
}

