// Side collapsible navbar JS code

document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".sidenav");
  let instances = M.Sidenav.init(elems, {
    edge: "right"
  });
});

console.log(1)




new Promise(
    function(resolve, reject){
  
  setTimeout(function(){
      console.log(2);
      resolve("ok")
      // reject("not okay ...!")
  },1000)

  }
).then(
  function(response){
    console.log(response);
    console.log(3)
  }
).catch(
    function(error){
      console.log(error)
    }
)



console.log(4);
console.log(5);