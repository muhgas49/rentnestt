

let se = document.getElementById("sen");

document.getElementById("nr").addEventListener("click", function(){
    document.querySelector("textarea").value = '';
});



se.addEventListener("click", function (){
  setInterval( function (){
 document.querySelector("textarea").value +='.';
 document.getElementById("test").innerHTML = 'Thanks for You';

  },400);
  setTimeout(function (){
   window.location.reload();
  },1600);
  
})




