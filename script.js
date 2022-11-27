const clock = document.getElementById("time");

function update() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    clock.innerHTML = t_str;
}
setInterval(update, 1000);
update();