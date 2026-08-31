/*setTimeout(()=>{
    console.log("Timeout 5s is done...");
}, 5000);*/

let intervalDetails = "";
intervalDetails = setInterval(()=>{
    console.log("Timeinterval is done...");
}, 5000);
setTimeout(() => {
    clearInterval(intervalDetails);
    console.log("Time interval is successfully completed");
}, 15000);