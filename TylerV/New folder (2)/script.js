var header = document.getElementsByTagName("header")[0];
var times = ["A.M.", "P.M"];
var dl = document.getElementsByTagName("dl")[0];
var elmnt;
var list = [];


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

document.addEventListener("onclick", function(e) 
{

}, false);