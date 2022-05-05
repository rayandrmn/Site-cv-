







         

        window.addEventListener('load', (event) => {
            
        const fusee = document.getElementById("fusee");
        let fuseeposition = 0;
        const planete = document.getElementById("planete");
        let lol = false;

        function Fusee(){
          

            
                // Suivi de la position de la souris dans la console
                fuseeposition = 0;
                fusee.style.top = `${fuseeposition}%`;
                console.log(fuseeposition);  
                lol = true;
                
                
               
        }

        function gravité(){

            int = setInterval(function (){
                fusee.style.transform = "rotate(10deg)";
                fusee.style.left = `${fuseeposition}%`;
                fusee.style.top = `50px`;


                 



            }, 2000)
             
                 
             
        }

        function tourne(){
            fusee.classList.add("fusee") ;
        }

        //Fusee();
        //gravité();






        $(function (){

            $("#lien").on("click", function(event){
        
                event.preventDefault();
                var hash = this.hash;
                fuseeposition += 200;
                fusee.style.top = `${fuseeposition}%`;
                 lol = true;
        
                $('body,html').animate({scrollTop: $(hash).offset().top} , 2000, function (){window.location.hash = hash;})

                console.log(fuseeposition);  

                 
        
            });

            
            $("#works").on("click", function(event){
        
                event.preventDefault();
                var hash = this.hash;
                fuseeposition = 400;
                fusee.style.top = `${fuseeposition}%`;
                 lol = true;
        
                $('body,html').animate({scrollTop: $(hash).offset().top} , 2000, function (){window.location.hash = hash;})

                console.log(fuseeposition);  

                 
        
            });
            
          })



           
const lien = document.getElementById("lien");
lien.addEventListener("click", apparition);

function apparition() {
 
   document.querySelector(".bio").setAttribute("id","apparition");
 }


function apparitionid(){
    document.querySelector(".bio").removeAttribute("id");
}



   

        });