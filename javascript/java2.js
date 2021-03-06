function myFunction(nam,clas) {
     
     var element = document.getElementById(nam);
    if(!element.classList.contains(clas))
        element.classList.add(clas);
      else
        element.classList.remove(clas);
      var element2 = document.getElementById('trans');
      

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