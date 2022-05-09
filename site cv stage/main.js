







         

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



var canvas = document.querySelector('.myCanvas');
var width = canvas.width = 320;
var height = canvas.height = 240;

        });