
//var xhttp = new XMLHttpRequest();

var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");


xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
   }
};



xhttp.open("GET","https://api.adviceslip.com/advice");
xhttp.send();





