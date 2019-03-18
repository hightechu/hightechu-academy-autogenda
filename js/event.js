function eventSubmitAJAX() {
  var location = "http://localhost:3000/api/events";
  var http_request = new XMLHttpRequest();

  var jsonObj = new Object();
  jsonObj.title = document.getElementById("title").value;
  jsonObj.description = document.getElementById("description").value;
  jsonObj.location = document.getElementById("location").value;
  jsonObj.date = document.getElementById("date").value;;
  jsonObj.userID = getCookie("id");

  postData = JSON.stringify(jsonObj);
  console.log(postData);

  http_request.open("POST", location, true);
  http_request.setRequestHeader("Content-type", "application/json");
  
  http_request.send(postData);
}

function eventListAJAX() {
  var location = "http://localhost:3000/api/events";
  var http_request = new XMLHttpRequest();

  http_request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      events = JSON.parse(this.responseText);

      text = "";

      for (event of events) {
        text += "<div>";
        text += "<h1>" + event.title + "</h1>";
        text += "</div>";
      }

      document.getElementById('events').innerHTML = text;
    }
  };

  http_request.open("GET", location, true);
  http_request.setRequestHeader("Content-type", "application/json");

  http_request.send();
  console.log(http_request.responseText);
}
