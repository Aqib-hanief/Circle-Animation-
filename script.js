document.onmousemove = function() {
    var elment = document.createElement('div');
    elment.style.top = event.clientY + "px";
    elment.style.left = event.clientX + "px";
    elment.style.background = randomColor();
    elment.setAttribute("class", "circle");
    document.body.appendChild(elment);

    setTimeout(() => {
        document.body.removeChild(elment);
    }, 1000);

    function randomColor() {
        var s = "0123456789abcdef";
        var color = "#";
        for (i = 0; i < 6; i++) {
            color += s[Math.floor(Math.random() * s.length)];
        }
        return color;
    }
}