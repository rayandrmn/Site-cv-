let ensaut = false;
   let gravité = 0.9;
   const contener = document.querySelector(".contener-portfolio");
   let gameover = false;
   const alert = document.getElementById("alert");
    
    document.addEventListener('keyup', touche);

    function touche(e){
         if(  e.keyCode === 90) {
             if(ensaut == false){
                 ensaut = true;
                 console.log("cc");
                 saut()
             }
        }
    }
    let position = 0;

    function saut(){
         let count = 0;
        let temps = setInterval(function(){
            if(count == 15){
                clearInterval(temps)
                console.log("descend");
                let downtimer = setInterval(function(){
                    if(count == 0){
                        clearInterval(downtimer);
                        ensaut = false;    
                    }
                    position -= 5;
                    count --;
                    position = position * gravité;
                    document.querySelector(".perso").style.bottom = `${position}px`;
                })
 

                 
            }

            console.log("saut");
             
            position +=30;
            count ++
            position = position * gravité
            document.querySelector(".perso").style.bottom = `${position}px`;
            console.log(document.querySelector(".perso").style.bottom)

            
    
        },15)
    }


    function generateurObstacle(){
        let randomtime = Math.random()* 6000;
        let obstaclePosition = 100;
        const obstacle = document.createElement("div");
        console.log(obstaclePosition);
        console.log(obstacle.style.left)
        if(!gameover)obstacle.classList.add("obstacle");
        contener.appendChild(obstacle);
        obstacle.style.left = `${obstaclePosition}%`;

        let timerid = setInterval(function(){
            if(obstaclePosition > 1 && obstaclePosition <4 && position < 50 ){
                 clearInterval(timerid);
                alert.innerHTML = 'game over';
                gameover = true;
                while(contener.firstChild){
                    contener.removeChild(contener.lastChild);
                }
            }


            obstaclePosition -=2;
            obstacle.style.left = `${obstaclePosition}%`;
             
        },20)
       if(!gameover){

       } setTimeout(generateurObstacle, randomtime);
        
    }
   // generateurObstacle();

let scoore = 0;

    function generateurpiece(){
        let randomtime = Math.random()* 3000;
        let piecePosition = 100;
        const piece = document.createElement("div");
        const lescore = document.querySelector(".score")
        if(!gameover)piece.classList.add("piece");
        contener.appendChild(piece);
        piece.style.left = `${piecePosition}%`;

        let timerid = setInterval(function(){
            if(piecePosition > 1 && piecePosition <3 && position < 50 ){
                  
                 
                 scoore += 2;
                 lescore.innerHTML = scoore;
                 console.log(scoore);        
            }


            piecePosition -=1;
            piece.style.left = `${piecePosition}%`;
             
        },20)
       if(!gameover){

       } setTimeout(generateurpiece, randomtime);
        
    }

     //generateurpiece();



      let droite = 0 ;


      function rayan(){
        const character = document.querySelector(".frame");
        let positionsprite = character.style.left;
       // console.log(positionsprite);
        droite -= 150;
       let cacadroite = -30;
       let distanceframe = droite + cacadroite;
       character.style.left = `${distanceframe}%`;

       if(positionsprite == "-780%"){
          // console.log("camarche")
          //caca.style.right = `${cacadroite}%`;
           droite =  0 ;
       }

      }setInterval( rayan, 33);

       //rayan();



        

       

         







        


 

 
let boutonCommencer = document.getElementById("bouton-jeu");;
boutonCommencer.addEventListener("click", lancementJeu);

let tailleEcrans = true;
let tailleWindow = window.innerWidth;

function lancementJeu(){
    console.log("cc");
    boutonCommencer.style.display = "none";
    if(tailleWindow >= 500){
        tailleEcrans = true;
    }else{
        tailleEcrans = false;
    }

    if(tailleEcrans){

    }else{
        generateurObstacle();
        generateurpiece()
    }

}