var header = document.getElementsByTagName("header")[0];
var times = ["A.M.", "P.M"];
var dl = document.getElementsByTagName("dl")[0];
var cpick = document.getElementsByTagName("cpick")[0];
var elmnt, selected;
var list = [];

// create list
for (var j = 0; j < 2; j++)
{
	elmnt = dl.appendChild(document.createElement("li"));
	elmnt.innerHTML = times[j];
	elmnt.style.backgroundColor = "rgb(51, 97, 255)";
	
	for (var i = 0; i < 12; i++)
	{
		elmnt = dl.appendChild(document.createElement("li"));
		elmnt.innerHTML = i + 1;
		list.push(elmnt);
	}
}

// events
cpick.addEventListener("click", function()
{
	for (var i = 0; i < 6; i++) {
		//cpick.appendChild(document.createElement("opt"));
	}
}, false)

for (i = 0; i < list.length; i++) 
{
	document.getElementsByTagName("li")[i].addEventListener("click", function(e)
	{
		cpick.style.display = "none";
		cpick.style.left = "" + (e.x + window.scrollX - 3) + "px";
		cpick.style.top = "" + (e.y - 100 + window.scrollY + 3) + "px";
		cpick.style.width = "0px";
		cpick.style.height = "0px";
		cpick.style.display = "block";
		cpick.style.transitionDuration = "all 2s";

		cpick.style.width = "100px";
		cpick.style.height = "100px";
		cpick.style.transitionDuration = "all 0s";
		
		//this.style.backgroundColor = "rgb(100, 100, 100)";
	}, false);
}

//main loop
function draw()
{
	
	requestAnimationFrame(draw);	
}
draw();
