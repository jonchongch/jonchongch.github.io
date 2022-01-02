
		// document.querySelectorAll("nav ul li a").forEach(function(a){
		// 	a.addEventListener("click", function(){
		// 		var b = this.getAttribute("href").substring(1);
		// 		var c = document.getElementsByTagName("section");
		// 		for (var i = 0; i < c.length; i++){
		// 			if (c[i].classList.contains("active")){
		// 				c[i].classList.remove("active")
		// 				document.getElementById(b).classList.add("active")
		// 			} else {
		// 				document.getElementById(b).classList.add("active")
		// 			}
		// 		}
		// 	});
		// });

		// var xhttp = new XMLHttpRequest();
		// xhttp.onreadystatechange = function() {
		// 	if (this.readyState == 4 && this.status == 200) {
		// 	document.getElementById("content").innerHTML =
		// 	this.responseText;
		// 	}
		// };
		// xhttp.open("GET", "./pages/done.html", true);
		// xhttp.send();

		document.querySelectorAll(".nav_container ul li a#pg").forEach(function(a){
			a.addEventListener("click", function(){
				var page = this.getAttribute("href").substring(1);
				var url = "./pages/" + page + ".html";
				var loadCon = document.getElementById("content");
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					loadCon.innerHTML = this.responseText;
					}
				};

				xhttp.open("GET", url, true);
				xhttp.send();
			});
		});

		document.querySelectorAll("#content div a#wb").forEach(function(a){
			a.addEventListener("click", function(){
				var page = this.getAttribute("href").substring(1);
				var url = "./pages/" + page + ".html";
				var loadCon = document.getElementById("content");
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					loadCon.innerHTML = this.responseText;
					}
				};

				xhttp.open("GET", url, true);
				xhttp.send();
			});
		});

		// function getSrc(_src){
		// 	var locateSrc = _src.lastIndexOf("-");
		// 	var reSrc = _src.substring( 0 ,locateSrc);
			
		// 	document.getElementById("loadBox").classList.add("cf");
		// 	document.getElementById("loadHere").src = reSrc + "-full.jpg";
		// };

		// function rmSrc(){
		// 	document.getElementById("loadBox").classList.remove("cf");
		// };

	
