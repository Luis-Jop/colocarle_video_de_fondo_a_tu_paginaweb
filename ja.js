const week = [ "Monday", "Tuesday","Wednesday ","Thursday","Friday","saturday","sunday"]
 

function updatetime() {
    var now = new Date();

    document.getElementById("time").innerText =
            zeropadding(now.getHours(), 2)+";"+
            zeropadding(now.getMinutes(),2)+ ";"+
            zeropadding(now.getSeconds(),2);

    document.getElementById("date").innerText =
             now.getFullYear()+ "/"+
             zeropadding(now.getMonth()+ 1 , 2)+ "/"+
             zeropadding(now.getDate(),2)+ "__"+
             week[now.getDay()];
    
    
}
updatetime();
setInterval(updatetime,1000);

function zeropadding(num,digit){
    return String(num).padStart(digit,'0')
}


