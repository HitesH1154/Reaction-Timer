   var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function move() {
    var shape = document.getElementById("shape");
    var top = Math.random() * (window.innerHeight - 200);
    var left = Math.random() * (window.innerWidth - 200);
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.backgroundColor = getRandomColor();
    shape.style.display = "block";
    start = new Date().getTime();
}

document.getElementById("shape").onclick = function () {
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert("Your reaction time is: " + timeTaken + " seconds");
    move(); // move again
};

window.onload = function () {
    move();
};
