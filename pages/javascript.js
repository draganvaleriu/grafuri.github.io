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
 	if(pos > 2600 && pos < 6000)
 		document.getElementById("reperez").className = "AAA";
 	else
 		document.getElementById("reperez").className = "";
 	if(pos > 3200 && pos < 4000)
 		document.getElementById("Matricea").className = "AAA";
 	else
 		document.getElementById("Matricea").className = "";
 
 	if(pos > 4100 && pos < 5000)
 		document.getElementById("muchii").className = "AAA";
 	else
 		document.getElementById("muchii").className = "";
 	if(pos > 5100 && pos < 6000)
 		document.getElementById("vecini").className = "AAA";
 	else
 		document.getElementById("vecini").className = "";
 	if(pos >6100 && pos < 7000)
 		document.getElementById("partial").className = "AAA";
 	else
 		document.getElementById("partial").className = "";
 	if(pos > 7100 && pos < 8000)
 		document.getElementById("nul").className = "AAA";
 	else
 		document.getElementById("nul").className = "";
 	if(pos > 8100 && pos < 9000)
 		document.getElementById("conex1").className = "AAA";
 	else
 		document.getElementById("conex1").cconex1lassName = "";
	if(pos > 8100 && pos < 9000)
 		document.getElementById("lant").className = "AAA";
 	else
 		document.getElementById("lant").cconex1lassName = "";
 	if(pos > 8100 && pos < 9000)
 		document.getElementById("conex2").className = "AAA";
 	else
 		document.getElementById("conex2").cconex1lassName = "";
 	if(pos > 8100 && pos < 9000)
 		document.getElementById("pad").className = "AAA";
 	else
 		document.getElementById("pad").cconex1lassName = "";
 	if(pos > 8100 && pos < 9000)
 		document.getElementById("ham").className = "AAA";
 	else
 		document.getElementById("ham").cconex1lassName = "";	
 };
 
  
function q(pix)
{ 
	window.scroll(0,pix);	 
}