window.onload=function(){
    var STEPS = 1;
    function CreateSpiral(mod) {
        var canvas = document.getElementById("myCanvas");
        var cxt = canvas.getContext("2d");
        var X = 150;
        var Y = 150;
        cxt.save();
        STEPS = STEPS + 0.001;
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        cxt.beginPath();
        cxt.moveTo(X, Y);
        var increment = 2 * Math.PI / STEPS;
        var theta = increment;
        while (theta < 40 * Math.PI) {
            var newX = X + theta * Math.cos(theta - mod);
            var newY = Y + theta * Math.sin(theta - mod);
            cxt.lineTo(newX, newY);
            theta = theta + increment;
        }
        cxt.stroke();
        cxt.restore();
    }
    var counter = 0;
    setInterval(function () {
        CreateSpiral(counter);
        counter += 0.05;
    }, 10);
}
