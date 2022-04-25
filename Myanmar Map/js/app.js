let currentPlace = document.querySelector(".current-place");
let allPath = document.querySelectorAll(".map path");
//let placeDes = document.querySelector(".place-des");

 allPath.forEach(x=>{ //x is currentPath
     x.addEventListener('mouseover', _=>{
        console.log(x.getAttribute('title'));
        currentPlace.innerText = x.getAttribute('title');
       // x.classList.add("active");
       /*  placeDes.innerText = x.getAttribute('des'); */        
     });
 })

 document.querySelector("[title='Yangon']").classList.add("active");
 currentPlace.innerText = "Yangon";