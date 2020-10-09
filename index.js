<script>
	$(document).ready(function(){
		$('.menu').click(function(){
    		$('ul').toggleClass('checkbtn')
		})
			
	}

</script>
//Get the button
var mybutton = document.getElementById("mybtn");
	
// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 800) {
		mybutton.style.display = "block";
	} 
	else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}