var quotes = [
    "Either you run the day or the day runs you!",
    "Strength is Weakness",
    "Feel the code",
    "May the source be with you",
    "DCI, everything is possible ;)",
    "Whether you think you or you think you can’t, you’re right",
    "Aim for failure and you always succeed"
]
var container = document.createElement("div")
container.classList.add("container")
var h1 = document.createElement("h1")
h1.textContent = "Quote of the day"
container.appendChild(h1)
var body = document.body
body.appendChild(container)
var p = document.createElement("p")
p.style.border = "1px solid red"
p.style.padding = "2px"
p.innerHTML = "--------"
body.appendChild(p)
var button = document.createElement("button")
button.addEventListener("click", function () { p.innerHTML = quotes[Math.floor(Math.random() * quotes.length)] })
button.textContent = "Random quote"
body.appendChild(button)
