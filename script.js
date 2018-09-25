var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// Create gradient
var grd=ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(0,0,190,130);
var c=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");

// Create gradient
var grd=ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"black");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,190,130);
var canvas = document.getElementById("myCanvas3");
var ctx=canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
var canvas = document.getElementById("myCanvas4");
var ctx=canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = grd;
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);