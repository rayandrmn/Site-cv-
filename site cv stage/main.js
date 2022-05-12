







         

        window.addEventListener('load', (event) => {
            
        const fusee = document.getElementById("fusee");
        let fuseeposition = 0;
        const planete = document.getElementById("planete");
        let lol = false;
        const nav = document.querySelector(".contener-nav");
        const boutonNav = document.querySelectorAll(".lien");
 
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
                nav.style.left = "0";
                nav.style.top = "0";
                nav.style.position = "fixed";
                 
                 
                console.log(boutonNav);

                for(let bouton of boutonNav){
                    console.log("qsdsqd")
                    bouton.firstElementChild.style.color = "white";
                }
                
                

                 
                fusee.style.top = `${fuseeposition}%`;
                 lol = true;
        
                $('body,html').animate({scrollTop: $(hash).offset().top} , 2000, function (){window.location.hash = hash;})

                console.log(fuseeposition);  

                 
        
            });

            
            $("#works").on("click", function(event){
        
                event.preventDefault();
                var hash = this.hash;
                fuseeposition = 300;
                fusee.style.top = `${fuseeposition}%`;
                 lol = true;
        
                $('body,html').animate({scrollTop: $(hash).offset().top} , 2000, function (){window.location.hash = hash;})

                console.log(fuseeposition);  

                 
        
            });


            $("#contacts").on("click", function(event){
        
                event.preventDefault();
                var hash = this.hash;
                fuseeposition = 400;
                fusee.style.top = `${fuseeposition}%`;
                 lol = true;
        
                $('body,html').animate({scrollTop: $(hash).offset().top} , 2000, function (){window.location.hash = hash;})

                console.log(fuseeposition);  

                 
        
            });

             

            $(".bouton").click(function(){
                let nom = $("#inputnom").val();
                console.log(nom);
                var mailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let mail = $("#inputemail").val();
                let text =$("#inputtext").val();
                if(nom == ""){
                    $("#nom, #inputnom").css("background-color", "#cc3300");
                    console.log("faut mettre ton nom");
                }else{
                    $("#nom, #inputnom").css("background-color", "rgb(106, 165, 200)");
                    console.log("nom correcte");
                    console.log(text);
                }


                if(mailregex.test(mail) == true){
                    console.log("nice");
                    $("#email, #inputemail").css("background-color", "rgb(106, 165, 200)");
                    console.log("emal correcte")
                }else{
                    $("#email, #inputemail").css("background-color", "#cc3300")
                    console.log("email faux");
                }


                if(text == ""){
                    $("#text, #inputtext").css("background-color", "#cc3300");
                    console.log("faut remplir la le champs");
                }else{
                    $("#text, #inputtext").css("background-color", "rgb(106, 165, 200)");
                    console.log("champ remplit correcte")
                }
                return false;
            })

           

            $(".contener-input").click(function(){
                $(".contener-input").css("width", "80%");

                $(this).css("width", "100%");
             })
            
          })



           
const lien = document.getElementById("lien");
lien.addEventListener("click", apparition);

function apparition() {
 
   document.querySelector(".bio").setAttribute("id","apparition");
 }


function apparitionid(){
    document.querySelector(".bio").removeAttribute("id");
}



//var canvas = document.querySelector('.myCanvas');
//var width = canvas.width = 320;
//var height = canvas.height = 240;
//var ctx = canvas.getContext("2d");
//
//ctx.fillStyle = "rgb(0, 0, 0)";
//ctx.fillRect(0, 0, width, height);
//
//ctx.fillStyle = 'rgb(255, 0, 0';
//ctx.fillRect(50, 50, 100, 150);
//
//ctx.fillStyle = "rgb(0, 255, 0)";
//ctx.fillRect(75, 75, 100, 100);
//
//ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
//ctx.fillRect(25, 100, 175, 50);
//
//ctx.strokeStyle = "rgb(255, 255, 255)";
//ctx.strokeRect(25, 25, 175, 200);
//ctx.lineWidth = 5;


//ctx.translate(width/2, height/2);
//
//function degToRad(degrees){
//    return degrees * Math.PI / 180;
//};
//
//function rand(min, max){
//    return Math.floor(Math.random() * (max-min+1)) + (min);
//}
//
//var length = 255;
//var moveOffset = 20;
//
//for(var i = 0; i < length; i++){
//   ctx.fillStyle = 'rgba(' + (255-length) + ', 0, ' + (255-length) + ', 0.9)';
//   ctx.beginPath();
//   ctx.moveTo(moveOffset, moveOffset);
//   ctx.lineTo(moveOffset+length, moveOffset);
//   var triHeight = length/2 * Math.tan(degToRad(60));
//   ctx.lineTo(moveOffset+(length/2), moveOffset+ triHeight);
//   ctx.lineTo(moveOffset, moveOffset);
//   ctx.fill();
//   
//   length--;
//   moveOffset += 0.7;
//   ctx.rotate(degToRad(5));
//}




 

        });