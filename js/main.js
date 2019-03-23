var header = document.getElementsByTagName("header")[0];
const times = ["A.M.", "P.M"];
var options = ["sleep", "work", "school"];
var dl = document.getElementsByTagName("dl")[0];
let elmnt, select, color;
var past = {
	act: null,
	hour: null
}
var list = [];


function postevent(data) {
	var location = "http://localhost:3000/api/event";
	var http_request = new XMLHttpRequest();
	http_request.onreadystatechange = function() {
		if (http_request.readyState == 4) {
			var response = JSON.parse(http_request.responseText);
		}
	}
	postData = JSON.stringify(data);
	http_request.open("POST", location, true);
	http_request.setRequestHeader("Content-type", "application/json");
	http_request.send(postData);
}

// create list
for (var j = 0; j < 2; j++)
{
	elmnt = dl.appendChild(document.createElement("li"));
	elmnt.innerHTML = times[j];
	elmnt.style.backgroundColor = "rgb(51, 97, 255)";
	list.push(false);
	for (var i = 0; i < 12; i++)
	{
		elmnt = dl.appendChild(document.createElement("li"));
		elmnt.innerHTML = i + 1;
		elmnt.className = i + 1;
		list.push(elmnt);
	}
}

// init
for (i = 0; i < list.length; i++) 
{
	if (list[i]) {
		document.getElementsByTagName("li")[i].addEventListener("click", function(e)
		{
			var classNm = this.className;

			// remove old elements
			for (var j = 0; j < document.getElementsByTagName('cpick').length; j++) {
				document.getElementsByTagName('ul')[1].removeChild(document.getElementsByTagName('cpick')[j]);
			}
     	   color = null;

			// create new color picker (cpick)
			cpick = document.getElementsByTagName("ul")[1].appendChild(document.createElement('cpick'));
			cpick.style.left = '' + (e.clientX + window.scrollX) + 'px';
			cpick.style.top = '' + (e.clientY - 100 + window.scrollY) + 'px';
			cpick.style.width = '240px';
			cpick.style.height = '120px';
			select = this.style;
        	var cpickUl = cpick.appendChild(document.createElement('ul'));

			// setup child node
			for (var j = 0; j < options.length; j++) {
				cpickUl.appendChild(document.createElement('li'));
				cpickUl.childNodes[j].id = options[j];
				cpickUl.childNodes[j].innerHTML = options[j];
        	    cpickUl.childNodes[j].style.width = '240px';
				cpickUl.childNodes[j].addEventListener('click', function(e) {
					color = window.getComputedStyle(document.querySelector('#' + this.id)).getPropertyValue('background-Color');
						if (past.act != this.id || past.hour != classNm) {
							//postevent({
							//	active:this.id,
							//	hour: classNm
							//});
							//past.act = this.id;
							//past.hour = classNm;
						}
				}, false);
			}

		}, false);
	}
}



// if pressed outside of
//main loop
function draw()
{
	if (select != color && color != null) {
		select.backgroundColor = color;
	}
	requestAnimationFrame(draw);	
}
draw();
