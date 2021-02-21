window.onscroll = function(){
 	var pos = document.documentElement.scrollTop;
 	let p1 =document.getElementById("unu").getBoundingClientRect().top + pos;
 	let p2 = document.getElementById('doi').getBoundingClientRect().top + pos ;
 	let p3 = document.getElementById('trei').getBoundingClientRect().top + pos;
 	 if(pos > 0 && pos < p2-200){
 		document.getElementById("term").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("term").className = "";
 	 }
 	  if(pos >= p2- 200 && pos < p3-200){
 	 	document.getElementById("grad").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("grad").className = "";
 	 }
 	 if(pos >= p3 - 200){
 	 	document.getElementById("reprez").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("reprez").className = "";
 	 }

 	  
 };
 
 function a(elem) {
  let box = elem.getBoundingClientRect();
 
    b(box.top + pageYOffset);  
}
function b(pix)
{ 
	window.scroll(0,pix);	 
}