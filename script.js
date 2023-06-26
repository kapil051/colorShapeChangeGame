 let box1= document.getElementById("outer");
 let box2=document.getElementById("inner");
 let colorButton=document.getElementById("color");
 let shapeButton=document.getElementById("shape");


    colorButton.addEventListener("click",()=>{
        // box1.style.backgroundColor="blue";
        // box2.style.backgroundColor="pink";

        if(box1.style.backgroundColor=="red"){
            box1.style.backgroundColor="blue";
        }

        else{
            box1.style.backgroundColor="red";
        }

    });

 
 
    shapeButton.addEventListener("click",()=>{

          if(box2.style.borderRadius==="50%"){
               box2.style.borderRadius="0";
               box2.style.backgroundColor="yellow";
          }

          else{
            box2.style.borderRadius="50%";
            box2.style.backgroundColor="cyan";
          }


    })