var header = document.getElementsByTagName("header")[0];
var times = ["A.M.", "P.M"];
var options = ["sleep", "work", "school"];
var dl = document.getElementsByTagName("dl")[0];
var elmnt, select;
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

// init
for (i = 0; i < list.length; i++) 
{
	document.getElementsByTagName("li")[i].addEventListener("click", function(e)
	{
		// remove old elements
		for (var j = 0; j < document.getElementsByTagName("cpick").length; j++) {
			document.getElementsByTagName("ul")[0].removeChild(document.getElementsByTagName("cpick")[j]);
		}

		// create new color picker (cpick)
		cpick = document.getElementsByTagName("ul")[0].appendChild(document.createElement("cpick"));
		cpick.style.left = "" + (e.x - window.scrollX) + "px" ;
		cpick.style.top = "" + (e.y - 100 + window.scrollY) + "px";
		cpick.style.width = "100px";
		cpick.style.height = "100px";
		select = this.style;

		// setup child node
		for (var j = 0; j < options.length; j++) {
			cpick.appendChild(document.createElement("opt"));
			document.getElementsByTagName("opt")[j].id = options[j];
			document.getElementsByTagName("opt")[j].innerHTML = options[j];
		}

	}, false);
}

//main loop
function draw()
{
	
	requestAnimationFrame(draw);	
}
draw();
