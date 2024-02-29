var Nightmode=false;



//drop down interface
function More() {
	var x = document.getElementsByClassName("dropdesign");
x[0].style.height="200%";
x[0].style.transition="height 0.8s";


}


function Revise() {
	var x = document.getElementsByClassName("dropdesign");
x[1].style.height="200%";
x[1].style.transition="height 0.8s";


}
function Reference() {
	var x = document.getElementsByClassName("dropdesign");
x[2].style.height="200%";
x[2].style.transition="height 0.8s";


}

function Questions() {
	var x = document.getElementsByClassName("dropdesign");
x[3].style.height="200%";
x[3].style.transition="height 0.8s";


}

function physicsrevise() {

	var x = document.getElementsByClassName("dropdesign");
x[4].style.height="200%";
x[4].style.transition="height 0.8s";


}


function incompletesubject() {
	var x = document.getElementsByClassName("dropdesign");
x[5].style.height="200%";
x[5].style.transition="height 0.8s";


}


function computerrevise() {
	var x = document.getElementsByClassName("dropdesign");
x[6].style.height="200%";
x[6].style.transition="height 0.8s";


}
function htmllow() {
	var x = document.getElementsByClassName("dropdesign");
	x[7].style.height="200%";
x[7].style.transition="height 0.8s";


}



function htmlaverage() {
	var x = document.getElementsByClassName("dropdesign");
	x[8].style.height="200%";
x[8].style.transition="height 0.8s";


}
function htmladvance() {
	var x = document.getElementsByClassName("dropdesign");
	x[9].style.height="200%";
x[9].style.transition="height 0.8s";


}function incompletedevelopers() {
	var x = document.getElementsByClassName("dropdesign");
	x[10].style.height="200%";
x[10].style.transition="height 0.8s";


}
function cssincomplete() {
	var x = document.getElementsByClassName("dropdesign");
	x[11].style.height="200%";
x[11].style.transition="height 0.8s";
}
function incompletelogin() {
	var x = document.getElementsByClassName("dropdesign");
	x[12].style.height="200%";
x[12].style.transition="height 0.8s";


}
function HTML() {
	var x = document.getElementsByClassName("dropdesign");
	x[13].style.height="200%";
x[13].style.transition="height 0.8s";


}





function Gobackdropdown() {

var x = document.getElementsByClassName("dropdesign");

x[0].style.height="0%";
x[0].style.transition="height 0.5s";
x[1].style.height="0%";
x[1].style.transition="height 0.5s";
x[2].style.height="0%";
x[2].style.transition="height 0.5s";
x[3].style.height="0%";
x[3].style.transition="height 0.5s";
x[4].style.height="0%";
x[4].style.transition="height 0.5s";
x[5].style.height="0%";
x[5].style.transition="height 0.5s";
x[6].style.height="0%";
x[6].style.transition="height 0.5s";
x[7].style.height="0%";
x[7].style.transition="height 0.5s";	
x[8].style.height="0%";
x[8].style.transition="height 0.5s";
x[9].style.height="0%";
x[9].style.transition="height 0.5s";
x[10].style.height="0%";
x[10].style.transition="height 0.5s";
x[11].style.height="0%";
x[11].style.transition="height 0.5s";
x[12].style.height="0%";
x[12].style.transition="height 0.5s";
x[13].style.height="0%";
x[13].style.transition="height 0.5s";



}




// nightmode interface
function NightmodeOn() {
	Nightmode = true;
	document.getElementById("Mode").innerHTML = "Normal";
	localStorage.setItem("NightMode", "Active");
	ChangeStyle(Nightmode);

}

function NormalMode() {
	Nightmode = false;
	document.getElementById("Mode").innerHTML = "Night";
	localStorage.setItem("NightMode", "Inactive");
    
	ChangeStyle(Nightmode);

}

function ChangeStyle(Nightmode) {
	var x = document.getElementsByClassName("Style");

	if (Nightmode == true) {
		x[0].href = "../../Style/NightMode.css";
		x[1].href = "../../Style/NightMode.css";
		document.getElementById('Mode').setAttribute("onClick", "NormalMode()");
		var metaThemeColor = document.querySelector("meta[name=theme-color]");
		metaThemeColor.setAttribute("content", "#323232");
	} else {
		x[0].href = "../../Style/Master.css";
		x[1].href = "../../Style/Mobile.css";
		document.getElementById('Mode').setAttribute("onClick", "NightmodeOn()");
		var metaThemeColor = document.querySelector("meta[name=theme-color]");
		metaThemeColor.setAttribute("content", "black");
	}
}

function Mobilebut() {
	var x = document.getElementsByClassName("side-nav-universal");
x[0].style.width="50%";
x[0].style.transition="width 0.4s";
 document.getElementById('mobilebutton').setAttribute( "onClick", "Mobilebutclose()" );
document.getElementById('mobilebutton').style.transform="rotate(45deg)";
document.getElementById('mobilebutton').style.transition="transform 0.3s";



}
function Mobilebutclose() {
	var x = document.getElementsByClassName("side-nav-universal");
x[0].style.width="0%";
x[0].style.transition="width 0.4s";
 document.getElementById('mobilebutton').setAttribute( "onClick", "Mobilebut()" );
document.getElementById('mobilebutton').style.transform="rotate(0deg)";
document.getElementById('mobilebutton').style.transition="transform 0.3s";
}






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




		








function Resize() {
var x = document.getElementById("Canvas");
x.style.height="40%";
x.style.transition="height 0.8s";
var y = document.getElementById("paper");
y.style.transition="height 0.8s";
y.style.height="60%";
document.getElementById('drop').setAttribute( "onClick", "Close()" );
 

}
function Close() {
var x = document.getElementById("Canvas");
x.style.height="0%";
x.style.transition="height 0.8s";
var y = document.getElementById("paper");
y.style.transition="height 0.8s";
y.style.height="95%";	
document.getElementById('drop').setAttribute( "onClick", "Resize()" );
 
	
}


function Time() {
// Set the date we're counting down to
var x = new Date().getTime();
y=x+TimeVal;
var countDownDate = new Date(y).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("displaytime").innerHTML =hours + "h "
  + minutes + "m " + seconds + "s ";
 

  // If the count down is finished, write some text
  if (distance == 60000) {
	  
  document.getElementById('id03').style.display='block';
  
}
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Marked";
	document.getElementById('id02').style.display='block'
	Checking();
  }
  
}, 1000);
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function copytext() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById("copy").innerHTML="Copied"

}




 //All the settings or loading
 
 
function saved() {
	if (localStorage.getItem("NightMode")=="Active") {
		NightmodeOn();
	}else {
		NormalMode();
	}
	
		
}

function Load(){

if (localStorage.getItem("Updates")==null){
	var modal = document.getElementById('id01');
	setTimeout(function display(){modal.style.display = "block"; modal.style.opacity = "1"; modal.style.transition = "opacity 3s"; },6000)
		 
	}
 }	


