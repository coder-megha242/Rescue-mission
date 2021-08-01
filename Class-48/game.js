class Game {
    constructor(){
        


    }
    
    getState(){

      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         
        gameState = data.val();

      })
     
    }
  
    update(state){

      database.ref('/').update({
        
        gameState : state

      });

    }
  
    start(){

      if(page === 2){

        button2.destroy();
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
        
      }

    }

    play(){
      
      game.getState();

      if(gameState === 1){

        Player.getPlayerInfo();

        var index = 0;
       
        var plrArray = [];
        
    
        var plrReady = [];

        if(allPlayers !== undefined){

          

            for(var plr in allPlayers){

                
                plrArray.push(allPlayers[plr].luck);
                plrReady.push(allPlayers[plr].ready);
                //console.log(plrArray);
                //console.log(plrReady);           
              
            }
  
            if(allPlayers[plr].ready === true){
              allReady = allReady + 1;
              console.log(allReady);
            }
            
             
  
          }

          
          
          

        
       
      }

    }

    gameStart(){

      if(gameState === 2){

        form.hide(); 
        
        if(player.state === "player"){

          playerX = dWidth/2
          playerY = dHeight/2
          playerDamage = 2;
          playerHealth = 100;

        }

        playerSprite = createSprite(playerX, playerY);

        //KitEffect

        if(player.kit === "Kit1"){

          playerWeapon = "bow";
          playerArmor = "leather";

        }

        if(player.kit === "Kit2"){

          playerWeapon = "sword";
          playerArmor = "chainmail";

        }

        if(player.kit === "Kit3"){

          playerWeapon = "trident";
          playerArmor = "chainmail";

        }
        
        //WeaponEffect

        if(playerWeapon === "bow"){

          playerDamageIncrease = 1.2;
          playerRange = 100;
          playerWeaponDelay = 40;

        }

        if(playerWeapon === "sword"){

          playerDamageIncrease = 1.6;
          playerRange = 20;
          playerWeaponDelay = 20;

        }

        if(playerWeapon === "trident"){

          playerDamageIncrease = 2;
          playerRange = 30;
          playerWeaponDelay = 50;

        }

        //ArmorEffect

        if(playerArmor === leather){

          playerDamageReduction = 1.5;

        }

        if(playerArmor === chainmail){

          playerDamageReduction = 1.7;

        }

        if(playerArmor === gold){

          playerDamageReduction = 2;

        }

      }

    }
    
  }
  
