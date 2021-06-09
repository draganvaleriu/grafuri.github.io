

function arrow()
{
 
window.scroll({
  top: 0,
  behavior: 'smooth'
});
	 
}
 

function myFunction(nam,clas) {
     
     var element = document.getElementById(nam);
    if(!element.classList.contains(clas))
        element.classList.add(clas);
      else
        element.classList.remove(clas);
       
}
function linc(adresa)
{
  window.location.replace(adresa);
}
  function add(idd,idd1,clas)
  {
    var element = document.getElementById(idd);
    var element1 = document.getElementById(idd1);
    if(element.classList.contains(clas))
    {
      element.classList.remove(clas);
      element1.classList.remove(clas);
        element.classList.add('style4');
        element1.classList.add('style4');
     
    } 
     
        var element2 = document.getElementById('trans');
     if(!element2.classList.contains('style3'))
        element2.classList.add('style3');
     

  }

 function f (){
		let a = document.getElementById('bb');
		 
		 if(!a.classList.contains("black"))
		 {

		 	a.classList.add("black");
		 	var s2  = document.querySelector('link[href="../../css/css1.css"]');
		 	if(s2)
		 		s2.href = "../../css/night.css";
		 	///----------
		 	
		 	var s1 = document.querySelector('[src = "page1_photo/graf1.png"]');
			if(s1)
			s1.src = "../../night/page1/graf1.png";
			/////
			var s1 = document.querySelector('[src = "page4_photo/graf1.png"]');
			if(s1)
			s1.src = "../../night/page4/graf1.png";
			///--------------
			var s1 = document.querySelector('[src = "page3_photo/graf1.png"]');
			if(s1)
				s1.src = "../../night/page3/graf1.png";
			///
			var s1 = document.querySelector('[src = "page1_photo/graf2.png"]');
			
			if(s1)
				s1.src = "../../night/page1/graf2.png";

			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf3.png"]');
			if(s1)
			s1.src = "../../night/page1/graf3.png";
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf3.1.png"]');
			if(s1)
			s1.src = "../../night/page1/graf3.1.png";
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf3.2.png"]');
			if(s1)
			s1.src = "../../night/page1/graf3.2.png";
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf3.3.png"]');
			if(s1)
			s1.src = "../../night/page1/graf3.3.png";
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf4.png"]');
			if(s1)
			s1.src = "../../night/page1/graf4.png";
			///-------------
			var s1 = document.querySelector('[src = "page1_photo/graf5.png"]');
			if(s1)
			s1.src = "../../night/page1/graf5.png";
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf6.png"]');
			if(s1)
			s1.src = "../../night/page1/graf6.png";
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf7.png"]');
			if(s1)
			s1.src = "../../night/page1/graf7.png";
			///--------------
			var s1 = [10];
			for(var i = 0 ; i < 3; i++)
				{  
					s1[i] = document.querySelector('[src = "page1_photo/graf8.png"]');
					if(s1[i] != null)
					{
					s1[i].src = "../../night/page1/graf8.png";
					}
				}
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf9.png"]');
			if(s1)
			s1.src = "../../night/page1/graf9.png";
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/graf10.png"]');
			if(s1)
			s1.src = "../../night/page1/graf10.png";
			///--------------
			 
			///--------------
			var s2 = [10];
			for(var i = 0 ; i < 2; i++)
				{  
					s2[i] = document.querySelector('[src = "page1_photo/graf11.png"]');
					if(s2[i] != null)
					s2[i].src ="../../night/page1/graf11.png";
				}
			///-----------
			 var s3 = [10];
			for(var i = 0 ; i < 2; i++)
					{  s3[i] = document.querySelector('[src = "page1_photo/graf22.png"]');
						if(s3[i] != null)
						s3[i].src = "../../night/page1/graf22.png";
					}
			///--------------
			var s1 = document.querySelector('[src = "page1_photo/mat.png"]');
			if(s1)
			s1.src = "../../night/page1/mat.png";

			   
		 }
		 else
		 {

		 	a.classList.remove("black");
		 	document.querySelector("link[href='../../css/night.css']").href = "../../css/css1.css";
		 	///----------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf1.png"]');
			if(s1)
			s1.src = "page1_photo/graf1.png";
		 	///------------	

		 	///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf2.png"]');
			if(s1)
			s1.src = "page1_photo/graf2.png";
			///
			var s1 = document.querySelector('[src = "../../night/page4/graf1.png"]');
			if(s1)
			s1.src = "page4_photo/graf1.png";
			///
			var s1 = document.querySelector('[src = "../../night/page3/graf1.png"]');
			if(s1)
			s1.src = "page3_photo/graf1.png";
			///
			var s1 = document.querySelector('[src = "../../night/page1/graf3.png"]');
			if(s1)
			s1.src = "page1_photo/graf3.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf3.1.png"]');
			if(s1)
			s1.src = "page1_photo/graf3.1.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf3.2.png"]');
			if(s1)
			s1.src = "page1_photo/graf3.2.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf3.3.png"]');
			if(s1)
			s1.src = "page1_photo/graf3.3.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf4.png"]');
			if(s1)
			s1.src = "page1_photo/graf4.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf5.png"]');
			if(s1)
			s1.src = "page1_photo/graf5.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf6.png"]');
			if(s1)
			s1.src = "page1_photo/graf6.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf7.png"]');
			if(s1)
			s1.src = "page1_photo/graf7.png";
			///------------
			var s1 = [4];
			for(var i = 0; i < 2; i++ )
		 	{
		 		s1[i] = document.querySelector('[src = "../../night/page1/graf8.png"]');
				if(s1[i] != null )
				s1[i].src = "page1_photo/graf8.png";
			}
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf9.png"]');
			if(s1)
			s1.src = "page1_photo/graf9.png";
			///------------
		 	var s1 = document.querySelector('[src = "../../night/page1/graf10.png"]');
			if(s1)
			s1.src = "page1_photo/graf10.png";
			///------------
		 	var s1 = [4];
			for(var i = 0; i < 2; i++ )
		 	{
		 		s1[i] = document.querySelector('[src = "../../night/page1/graf11.png"]');
				if(s1[i] != null)
				s1[i].src = "page1_photo/graf11.png";
			}
			///------------
		 	var s1 = [4];
			for(var i = 0; i < 2; i++ )
		 	{
		 		s1[i] = document.querySelector('[src = "../../night/page1/graf22.png"]');
				if(s1[i] != null)
				s1[i].src = "page1_photo/graf22.png";
			}
			///------------
		 	var s2 = document.querySelector('[src = "../../night/page1/mat.png"]');
			if(s2)
			s2.src = "page1_photo/mat.png";
		 }
	}



aaa.onmouseenter = function(){
this.classList.add('it1');
}

aaa.onmouseleave = function(){
setTimeout(function(){
this.classList.remove('it1');
}.bind(this),1000)
}

 