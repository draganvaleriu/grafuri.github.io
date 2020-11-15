window.onscroll = function(){
 	var pos = document.documentElement.scrollTop;
 	if(pos > 10 && pos < 1800)
 		document.getElementById("term").className = "AAA";
 	else
 		document.getElementById("term").className = "";
 	if(pos > 1800 && pos < 2500)
 		document.getElementById("grad").className = "AAA";
 	else
 		document.getElementById("grad").className = "";
 };
 
 function f(){ 
 	if(document.documentElement.scrollTop > 10
 		&& document.documentElement.scrollTop < 1800)
 		document.getElementById("term").className = "AAA";
 	else
 		document.getElementById("term").className = "";
}	
  function f1(){ 
 	if(document.documentElement.scrollTop > 1800
 		&& document.documentElement.scrollTop < 3000)
 		document.getElementById("grad").className = "AAA";
 	else
 		document.getElementById("term").className = "";
}	
 
function q(prop)
{ 

	window.scroll(0,1000);	 
}