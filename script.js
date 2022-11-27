const clock = document.getElementById("time");
const input = document.getElementsByClassName("searchbar")[0];

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

input.addEventListener("keypress", function (event){
    if (event.key === "Enter"){
        value = input.value;
        value = value.replace(/ /g, "+")
        window.location = "http://www.google.com.pk/search?btnG=1&pws=0&q=" + value
    }
})

input.focus()