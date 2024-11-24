let res = document.getElementById("res");

let sen = document.getElementById("sen");

let title = document.getElementById("title");

let description = document.getElementById("description");

let cheak = document.getElementById("cheak");



sen.addEventListener("click",function(){
    setInterval(function(){
        document.getElementById("description").value += '.';
        document.getElementById("jr").innerHTML = 'Done 😀';
    },400);
    setTimeout(function (){
            window.location.reload()
    },2000)
})




res.addEventListener("click",function(){
    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
    document.getElementById("num").value = '';
})
// document.getElementById("nr").addEventListener("click", function(){
//     document.querySelector("textarea").value = '';
// });



// se.addEventListener("click", function (){
//   setInterval( function (){
//  document.querySelector("textarea").value +='.';
//  document.getElementById("test").innerHTML = 'Thanks for You';

//   },400);
//   setTimeout(function (){
//    window.location.reload();
//   },1600);
  
// })

