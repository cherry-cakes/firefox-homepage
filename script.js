const clock = document.getElementById("time");
const input = document.getElementsByClassName("searchbar")[0];
const messages = [
    "Good evening boss!",
    "Hi!",
    "Stack overflow again?",
    "Stop procrastinating!",
    "Search with google...",
    "Google search...",
    "Google with search...",
    "Refresh me!",
    "Made with love.",
    "Not bing!",
    "What will you search?",
    "Feeling lucky?",
    "Host me somewhere!",
    "Cuter than your search bar!",
    "It's rosé pine, mom!",
    "Don't refresh me!",
    "Technically, this can break with the right input...",
    "Safer code than nuclear bombs!",
    "Oree and Spen Fource!",
    "Fork me!"
]

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function update() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (hours < 10){
        hours = "0" + hours 
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    clock.innerHTML = t_str;
}

setInterval(update, 1000);
input.placeholder = messages.random()
update();

input.addEventListener("keypress", function (event){
    if (event.key === "Enter"){
        value = input.value;
        value = value.replace(/ /g, "+")
        window.location = "http://www.google.com.pk/search?btnG=1&pws=0&q=" + value
    }
})

input.focus()