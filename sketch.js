 /*

 Game Project

Created By UMER FAROOQ

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var canyon;
var collectable;
var trees_x;
var clouds;
var mountains;
var cameraPosX;



var isLeft;
var isRight;
var isPlummeting;
var isFalling;
var game_score;
var keyCode;
var flagpole;

var lives;
var platforms;
var enemies; 
function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	lives = 3;
    startGame();

    
}
function draw()
{
cameraPosX=gameChar_x-width/2
	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue
 
   
    
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); 
    //draw some green ground
    push()
    translate(-cameraPosX, 0)
 //DECLARE THE FUNCTIONS
    
   push();
    drawMountains();
    drawTrees();
    drawClouds();
    renderFlagpole();
    checkFlagpole();
    
   
  for (var i = 0; i < collectable.length; i++){
       drawCollectable(collectable[i]);
        
       checkCollectable(collectable[i]);
    }
    
    for (var i = 0; i < canyon.length; i++){
       drawCanyon(canyon[i]); 
        checkCanyon(canyon[i]);
    }
    
    
    for (var i =0; i < platforms.length; i++){
         platforms[i].draw();
    }
     for ( var i = 0; i < enemies.length; i++)
     {
         enemies[i].draw();
         
         var isContact = enemies[i].checkContact(gameChar_x,gameChar_y);
         if(isContact)
             {
                 if (lives > 0 )
                 {
                 lives -=1;
                 startGame();
                     break;
                 }
             }
     }
    pop();
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
      //face
    fill(222,184,135);
    stroke(0);
    ellipse(gameChar_x ,gameChar_y -57, 20,22);
    
//body
    fill(139,69,19);
    rect(gameChar_x -2,gameChar_y-46, 3,4);
     rect(gameChar_x -4,gameChar_y-42, 7,20);
    //legs
    
    rect(gameChar_x -6,gameChar_y-22, 3,16);
    rect(gameChar_x  ,gameChar_y-22, 3,16);
    
    //hands
    
    stroke(0);
    fill(205,133,63);
    ellipse(gameChar_x -7 ,gameChar_y -40,20,3);
    
    // eyes
        noStroke();

fill(0);
    ellipse(gameChar_x -5, gameChar_y - 60,5,5);
    
    //mouth 
    ellipse(gameChar_x -5, gameChar_y - 52, 5, 2);

}

	else if(isRight && isFalling)
	{
		// add your jumping-right code
        
        
   
  //face
    fill(222,184,135);
    stroke(0);
    ellipse(gameChar_x ,gameChar_y -57, 20,22);
    
//body
    fill(139,69,19);
    rect(gameChar_x -2,gameChar_y-46, 3,4);
     rect(gameChar_x -4,gameChar_y-42, 7,20);
    //legs
    rect(gameChar_x -4,gameChar_y-22, 3,16);
    rect(gameChar_x +2 ,gameChar_y-22, 3,16);
    
    //hands
    
        stroke(0);
    fill(205,133,63);
    ellipse(gameChar_x +7 ,gameChar_y -40,20,3);
    
    // eyes
        noStroke();

fill(0);
    ellipse(gameChar_x +5, gameChar_y - 60,5,5);
    
    //mouth 
    ellipse(gameChar_x +5, gameChar_y - 52, 5, 2);


	}
	else if(isLeft)
	{
		// add your walking left code
         
        
   //face
    fill(222,184,135);
    stroke(0);
    ellipse(gameChar_x ,gameChar_y -57, 20,22);
    
//body
    fill(139,69,19);
    rect(gameChar_x -2,gameChar_y-46, 3,4);
     rect(gameChar_x -4,gameChar_y-42, 7,25);
    //legs
    rect(gameChar_x -6,gameChar_y-19, 3,21);
    rect(gameChar_x  ,gameChar_y-19, 3,21);
    
    //hands
    
        stroke(0);
    fill(205,133,63);
    ellipse(gameChar_x ,gameChar_y -32,3,20);
    
    // eyes
        noStroke();

fill(0);
    ellipse(gameChar_x -5, gameChar_y - 60,5,5);
    
    //mouth 
    ellipse(gameChar_x -5, gameChar_y - 52, 5, 2);



	}
	else if(isRight)
	{
		// add your walking right code
        
        
    //face
    fill(222,184,135);
    stroke(0);
    ellipse(gameChar_x ,gameChar_y -57, 20,22);
    
//body
    fill(139,69,19);
    rect(gameChar_x -2,gameChar_y-46, 3,4);
     rect(gameChar_x -4,gameChar_y-42, 7,25);
    //legs
    rect(gameChar_x -4,gameChar_y-19, 3,21);
    rect(gameChar_x +2 ,gameChar_y-19, 3,21);
    
    //hands
    
        stroke(0);
    fill(205,133,63);
    ellipse(gameChar_x ,gameChar_y -32,3,20);
    
    // eyes
        noStroke();

fill(0);
    ellipse(gameChar_x +5, gameChar_y - 60,5,5);
    
    //mouth 
    ellipse(gameChar_x +5, gameChar_y - 52, 5, 2);






	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
           
        
  //face
     fill(222,184,135);
    stroke(0);
    ellipse(gameChar_x ,gameChar_y -57, 20,22);
    //body
    fill(139,69,19);
    rect(gameChar_x -2,gameChar_y-46, 3,4);
     rect(gameChar_x -8,gameChar_y-42, 15,20);
    //legs
    rect(gameChar_x -8,gameChar_y-22, 3,16);
    rect(gameChar_x + 4,gameChar_y-22, 3,16);
    
     //hands
        stroke(0);  
    fill(205,133,63);
    ellipse(gameChar_x +12,gameChar_y -40,20,3);
       ellipse(gameChar_x -12,gameChar_y -40,20,3);

 // eyes
        noStroke();

fill(0);
    ellipse(gameChar_x -5, gameChar_y - 60,5,5);
    ellipse(gameChar_x +5, gameChar_y - 60,5,5);
    
    //mouth 
    ellipse(gameChar_x , gameChar_y - 52, 8, 2);

	}
	else
	{
		// add your standing front facing code
        
     //face
    fill(222,184,135);
    stroke(0);
    ellipse(gameChar_x ,gameChar_y -57, 20,22);
    
//body
    fill(139,69,19);
    rect(gameChar_x -2,gameChar_y-46, 3,4);
     rect(gameChar_x -8,gameChar_y-42, 15,25);
    //legs
    rect(gameChar_x -8,gameChar_y-19, 3,21);
    rect(gameChar_x + 4,gameChar_y-19, 3,21);
    
    //hands
    
        stroke(0);
    fill(205,133,63);
    ellipse(gameChar_x +8,gameChar_y -32,3,20);
       ellipse(gameChar_x -9,gameChar_y -32,3,20);
    
     // eyee
        noStroke();
    fill(0);
    ellipse(gameChar_x -5, gameChar_y - 60,5,5);
    ellipse(gameChar_x +5, gameChar_y - 60,5,5);
    
    //mouth 
    ellipse(gameChar_x , gameChar_y - 52, 8, 2);

    }
    pop();
    // score couter 
   
    fill(255);
    stroke(0);
    rect(20,10,70,20);
    fill(0);
    text("S c o r e : " + game_score, 24, 25);
   checkPlayerDie();

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if(isLeft == true)
        {
            gameChar_x -= 6;
        }
    
    if(isRight == true) 
        {
            gameChar_x += 6;
        }
    
    // character jumping 
    if(gameChar_y < floorPos_y)
        {    var isContact = false;
            for( var i =0;i < platforms.length; i++)
            {
               if ( platforms[i].checkContact(gameChar_x,gameChar_y) == true)
                {
                    isContact = true;
                    isFalling = false;
                    break;
                } 
            }
         if (isContact == false){
              isFalling = true;
             gameChar_y= gameChar_y + 2; 
               
   
         }
        
        }
    else{isFalling=false}
//-------------------------------------------------
    
    
    
    
    
    
    
    ///--------------------------------------------
    
    
    
   
    if(gameChar_y> floorPos_y-2 && (gameChar_x>canyon.x_pos+10 && gameChar_x<canyon.x_pos+canyon.width-10))
        {gameChar_y+=5
        isPlummeting=true
        }
        
    
    
    
    
    fill(0);
         if(lives<1){
             
             text("!GAME OVER! \n Press SPACE TO CONTINUE ",width/2,height /3,200);
              isLeft=false
             isRight=false
             if (keyCode == 32){
                 startGame();
                 lives = 3;
             }
              return;
         }    
    if (flagpole.isReached == true){
        text("Level Completed. Press Space to Continue", width/2,height /4,800);
    }
}



function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	//console.log("keyPressed: " + key);
	//console.log("keyPressed: " + keyCode);
    if(keyCode == 65)
        {
            //console.log("a");
            isLeft = true;
        }
    if(keyCode == 68)
        {
            //console.log("d");
            isRight = true;
        }
    
        if(keyCode == 87 && gameChar_y==floorPos_y)
            {
                gameChar_y-=100
                isFalling==true
            }
            
    
}


function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	//console.log("keyReleased: " + key);
	//console.log("keyReleased: " + keyCode);
    
    if(keyCode == 65)
        {
            //console.log("a");
            isLeft = false;
        }
else if(keyCode == 68)
        {
            //console.log("d");
            isRight = false;
        }
}


function drawClouds(){
      for (var u = 0 ; u  < clouds.length;u++){
        noStroke();
          fill(255);
    ellipse(clouds[u].pos_x+15, clouds[u].pos_y , 50,30);
            
    ellipse(clouds[u].pos_x, clouds[u].pos_y,40,45);
 ellipse(clouds[u].pos_x - 15, clouds[u].pos_y,50,30);
             }

    
    
    
}

function drawMountains(){
      for (var m = 0 ; m  < mountains.length;m++){
    fill(70,130,180);
          
    stroke(65,105,225);
    triangle(mountains[m].x_pos-100,mountains[m].y_pos,mountains[m].x_pos,mountains[m].y_pos-330,mountains[m].x_pos+100,mountains[m].y_pos);
        
        triangle(mountains[m].x_pos-20,mountains[m].y_pos,mountains[m].x_pos+80,mountains[m].y_pos-200,mountains[m].x_pos+200,mountains[m].y_pos);
   
    
    }
  
    
}


function drawTrees(){
    for(var i=0; i<trees_x.length;i++){
fill(139,69,19);
        noStroke();
    rect(trees_x[i],282,60,150);
       fill(0,100,0);

   triangle(trees_x[i]-50,floorPos_y-90,trees_x[i]+120,floorPos_y-90,trees_x[i]+30,floorPos_y-300);
           triangle(trees_x[i]-60,floorPos_y-110,trees_x[i]+130,floorPos_y-110,trees_x[i]+30,floorPos_y-320);

    }
    
}
    function drawCollectable(t_collectable){
     
        if(t_collectable.isFound==false)
    {    
    fill(0);
        stroke(255,255,0);
        strokeWeight(2);

ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size);
//fill(255,204,0);
       // noStroke();
textSize(20);
text("€", t_collectable.x_pos - 6, t_collectable.y_pos + 6)}
       
               }

        
    

function  drawCanyon(t_canyon){
    noStroke();
    fill(72,209,204);
     rect(t_canyon.x_pos, floorPos_y, t_canyon.width,floorPos_y);
}

    


function checkCollectable(t_collectable){
    if ((dist(t_collectable.x_pos, t_collectable.y_pos, gameChar_x,gameChar_y)< 60 || dist(t_collectable.x_pos,t_collectable.y_pos,gameChar_x,gameChar_y - 70) < 60) && t_collectable.isFound == false){
        t_collectable.isFound = true;
        game_score +=1;
    }
    
}
 

function checkCanyon(t_canyon){
    if (gameChar_x <= (t_canyon.x_pos + t_canyon.width) && gameChar_x >= t_canyon.x_pos && gameChar_y == floorPos_y){
        isPlummeting = true;
    }
    if (isPlummeting == true){
        gameChar_y = gameChar_y +2;
    }
}

function renderFlagpole(){
    push();
    strokeWeight(13);
    stroke(0);
    rect(flagpole.x_pos -13,floorPos_y - 20,30,20)
    line(flagpole.x_pos +2,floorPos_y-10,flagpole.x_pos,floorPos_y -350);
    fill(255);
    noStroke();
    if (flagpole.isReached)
    {
    rect(flagpole.x_pos, floorPos_y - 335,130,100 )
    fill(255,0,0);
        rect(flagpole.x_pos, floorPos_y - 294,130,20)
        rect(flagpole.x_pos + 55, floorPos_y - 335,20,100)
    }
    else
    {
         rect(flagpole.x_pos, floorPos_y - 100,130,100)
        fill(255,0,0)
        rect(flagpole.x_pos , floorPos_y - 100,130,20)
        rect(flagpole.x_pos + 100 , floorPos_y - 100,20,100)
        
        
    }
}

function checkFlagpole()
{
    
 var d = abs(gameChar_x - flagpole.x_pos);
    
    if (d<12)
        {
          flagpole.isReached = true;  
        }
    
}

function checkPlayerDie()
{
    if (isPlummeting == true && lives > 0){
        lives -=1;
        if (lives > 0){
            startGame();
        }
    }
   
    //lives board
    stroke(0);
    fill(255,0,0);
    rect(20,30,70,20);
    fill(0);
   text("L i v e s : " + lives,26,35,150); 
}

function startGame()
  {
   gameChar_x = width/2;
	gameChar_y = floorPos_y;
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    cameraPosX=0
     
    canyon = [ {x_pos:300 , width: 120},
             {x_pos:600 , width: 150},
             {x_pos:1700 , width: 80},
              {x_pos:900 , width: 100},
              
              {x_pos:1300 , width: 100},
               {x_pos:2500 , width: 400},
             ]

    collectable = [{x_pos: 20, y_pos: floorPos_y-12, size: 32,isFound:false},
                 
                   {x_pos: 300, y_pos: floorPos_y-100, size: 32,isFound:false},
               
                   {x_pos: 690, y_pos: floorPos_y-95, size: 32,isFound:false},
                
                   {x_pos: 1100, y_pos : floorPos_y-100, size: 32,isFound:false},
                
                   {x_pos: 1260, y_pos: floorPos_y-12, size: 32,isFound:false},
                 
                   {x_pos: 2160, y_pos: floorPos_y-190, size: 32,isFound:false},
                    
                   {x_pos: 2740, y_pos: floorPos_y-190, size: 32,isFound:false},
                    
                   {x_pos: 2730, y_pos: floorPos_y-40, size: 32,isFound:false},
                 
                 
                 ]
    
    trees_x=[0,230,958,1210,1400,1860,2178,2498,2778,2990,3200,3433,3844,4200,4600]
    mountains = [{x_pos:270,y_pos:floorPos_y},
                 {x_pos:505,y_pos:floorPos_y},
                  {x_pos:610,y_pos:floorPos_y},
                   {x_pos:912,y_pos:floorPos_y},
                    {x_pos:1100,y_pos:floorPos_y},
                     {x_pos:1400,y_pos:floorPos_y},
                      {x_pos:1600,y_pos:floorPos_y},
                     {x_pos:1700,y_pos:floorPos_y},
                    {x_pos:1900,y_pos:floorPos_y},
                   {x_pos:2100,y_pos:floorPos_y},
                  {x_pos:2200,y_pos:floorPos_y},
                 {x_pos:2400,y_pos:floorPos_y},
                {x_pos:2600,y_pos:floorPos_y},
               {x_pos:2800,y_pos:floorPos_y},
                
                 
   
    ]
     clouds = [ {pos_x:150,pos_y:100},                                      
                {pos_x:380,pos_y:160},
                 {pos_x:470,pos_y:80},
                  {pos_x:530,pos_y:110},
                   {pos_x:980,pos_y:90},
                    {pos_x:1260,pos_y:80},
                     {pos_x:1400,pos_y:60},
                      {pos_x:1560,pos_y:80},
                       {pos_x:1650,pos_y:90},
                        {pos_x:1800,pos_y:70},
                       {pos_x:1950,pos_y:80},
                      {pos_x:2178,pos_y:90},
                     {pos_x:2398,pos_y:80},
                    {pos_x:2500,pos_y:190},
                   {pos_x:2650,pos_y:100},
                  {pos_x:2800,pos_y:120},
                 {pos_x:2970,pos_y:130},
                {pos_x:3200,pos_y:150},
           
             ]
      
      
      //platfroms
    
    platforms = [];
    platforms.push(createPlatfroms(100,floorPos_y -80,100));
    platforms.push(createPlatfroms(300,floorPos_y -80,100));
    platforms.push(createPlatfroms(560,floorPos_y -70,140));
    platforms.push(createPlatfroms(1150,floorPos_y -80,200));
    platforms.push(createPlatfroms(1500,floorPos_y -80,100));
    platforms.push(createPlatfroms(1800,floorPos_y -80,100));
    platforms.push(createPlatfroms(1950,floorPos_y -120,100));
    platforms.push(createPlatfroms(2100,floorPos_y -150,100));
    platforms.push(createPlatfroms(2500,floorPos_y -80,100));
    platforms.push(createPlatfroms(2580,floorPos_y -120,300));
    platforms.push(createPlatfroms(2580,floorPos_y -30,300));


    //ENEMIES
    enemies = [];
    enemies.push(new Enemy(100,floorPos_y -10, 100));
    enemies.push(new Enemy(300,floorPos_y -10, 100));
    enemies.push(new Enemy(800,floorPos_y -10, 100));
    enemies.push(new Enemy(1100,floorPos_y -10, 100));
    enemies.push(new Enemy(1850,floorPos_y -10, 100));
    //enemies.push(new Enemy(2750,floorPos_y -40, 100));
    enemies.push(new Enemy(3100,floorPos_y -10, 100));
  


game_score = 0 ;
    flagpole = {isReached:false, x_pos:3670}

}


function createPlatfroms(x, y, length){
    var  p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
            fill(0);
            stroke(210,105,30);
            strokeWeight(2);
            rect(this.x,this.y,this.length,20);
        
    },
        checkContact: function ( gc_x,gc_y){
         
        if (gc_x > this.x && gc_x < this.x + this.length)
            {
                var d = this.y - gc_y;
                
                if (d >= 0 && d < 5)
                {
                    return true;
                }
                return false;
            }
         }
    }
    return p;
}

function Enemy(x, y, range)
{
    
    this.x = x; 
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 1;
    
    this.update = function()
    {
        this.currentX += this.inc;
        
        if ( this.currentX >= this.x + this.range)
            {
                this.inc = -1;
            }
        else if (this.currentX < this.x)
            {
                this.inc = 1;
            }
    }
    this.draw = function ()
    {
        this.update();
       fill(255,0,0);
        noStroke();
        rect(this.currentX,this.y-18,30,30);
        fill(0);
        ellipse(this.currentX + 15,this.y-15,30,30);
        fill(255,0,0);
        stroke(255,215,0);
        ellipse(this.currentX + 22,this.y-18,5,5);
        ellipse(this.currentX +8,this.y-18,5,5);
    
    }
    this.checkContact = function (gc_x,gc_y)
    {
        var d = dist (gc_x,gc_y,this.currentX,this.y)
         if (d < 20){
             return true;
         } 
        return false;
    }
}
//------------------------------------------------

