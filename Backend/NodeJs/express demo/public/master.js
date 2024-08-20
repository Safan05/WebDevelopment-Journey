let frame=document.getElementById("frame");
let draw=frame.getContext("2d");
// canvas main used functions
/*
draw.fillStyle="black";
draw.fillRect(0,0,frame.width,frame.height);    // used for drawing a rectangle (x,y,width,heigh);
draw.fillStyle="red";
draw.beginPath();
draw.arc(frame.width/2,frame.height/2,10,0,Math.PI*2,false);  // (x,y,radius,start angle,end angle,1 for ccw,0 for cw);
draw.closePath();
draw.fill();
*/

const ball={
    x: frame.width/2,
    y: frame.height/2,
    radius:frame.width/60,
    speed:7,
    color:"Blue",
    VelX:frame.width/200,
    VelY:frame.height/150,
    update:function update(){
        this.x+=this.VelX;
        this.y+=this.VelY;
    },
    reset:function reset(){
        this.x=frame.width/2;
        this.y=frame.height/2;
        this.VelX*=-1;
        this.VelY*=-1;
    }
}
const SepLine={
    x: (frame.width-8)/2,
    y:0,
    width:2,
    height:10,
    color:"white"
}
const Player_Bar={
    x:0,
    y:(frame.height-frame.height/4)/2,
    width:frame.width/60,
    height:frame.height/4,
    color:"red",
    speed:frame.height/20,
    score:0,
    reset: function reset(){
        this.score=0;
        this.y=(frame.height-frame.height/4)/2;
    },
    up:function up(){
        if(this.y-this.speed<=0)
            this.y=0;
        else 
        this.y-=this.speed;
    },
    down:function down(){
        if(this.y+this.height+this.speed>=frame.height)
            this.y=frame.height-this.height;
        else 
        this.y+=this.speed; 
       }
}
const CMP_Bar={
    x:frame.width-frame.width/60,
    y:(frame.height-frame.height/4)/2,
    width:frame.width/60,
    height:frame.height/4,
    color:"black",
    speed:frame.height/150,
    score:0,
    reset: function reset(){
        this.score=0;
        this.y=(frame.height-frame.height/4)/2;
    },
    move: function move(){
        this.y+=this.speed;
    }
}
function drawRect(x,y,width,height,color){
    draw.fillStyle=color;
    draw.fillRect(x,y,width,height);
}
function drawCircle(x,y,radius,color){
    draw.fillStyle=color;
    draw.beginPath();
    draw.arc(x,y,radius,0,Math.PI*2,false);  
    draw.closePath();
    draw.fill();
    draw.stroke();
}
let fontSize=frame.width/10;
function drawScore(text,x,y){
    draw.fillStyle="white";
    draw.font=`${fontSize}px Arial`;
    draw.fillText(text,x,y);
}
function drawLines(){
    for(let i=0;i<=frame.height;i+=14)
        drawRect(SepLine.x,SepLine.y+i,SepLine.width,SepLine.height,SepLine.color);
}
function gameUpdate(){
    ball.update();
    CMP_Bar.move();
}
function edgeCollision(){
    if(ball.y-ball.radius<=0||ball.y+ball.radius>=frame.height){
        ball.VelY*=-1;
    }
    if(((ball.x+ball.radius>=CMP_Bar.x&&(ball.y-ball.radius<=CMP_Bar.y+100&&ball.y+ball.radius>=CMP_Bar.y))||(ball.x-ball.radius<=Player_Bar.x+Player_Bar.width&&(ball.y-ball.radius<=Player_Bar.y+100&&ball.y+ball.radius>=Player_Bar.y)))){
        ball.VelX*=-1;
    }
    if(ball.x+ball.radius>=frame.width){
        Player_Bar.score+=1;
        ball.reset();
    }
    if(ball.x-ball.radius<=0){
        CMP_Bar.score+=1;
        ball.reset();
    }
    if(CMP_Bar.y+CMP_Bar.height>=frame.height||CMP_Bar.y<=0)
        CMP_Bar.speed*=-1;
}
function scoreReset(){
    Player_Bar.reset();
    CMP_Bar.reset();
}
function endGame(){
    if(Player_Bar.score>=10){
        Restart();
        }
    else if(CMP_Bar.score>=10){
        Restart();
    }
}
function gameDraw(){
    draw.fillStyle="darkgreen";
    draw.fillRect(0,0,frame.width,frame.height);   
    drawCircle(ball.x,ball.y,ball.radius,ball.color);
    draw.fillStyle=Player_Bar.color;
    drawRect(Player_Bar.x,Player_Bar.y,Player_Bar.width,Player_Bar.height);
    draw.fillStyle=CMP_Bar.color;
    drawRect(CMP_Bar.x,CMP_Bar.y,CMP_Bar.width,CMP_Bar.height);
    drawLines();
    drawScore(Player_Bar.score,frame.width/4,frame.height/4);
    drawScore(CMP_Bar.score,3*frame.width/4-fontSize/2,frame.height/4);
}
function gameLoop(){
    draw.clearRect(0,0,frame.width,frame.height);
    window.requestAnimationFrame(gameLoop);
    gameDraw();
    edgeCollision();
    gameUpdate();
    endGame();
}
function ChangeCol(col){
    ball.color=col;
}
var st=0;
function Start(){
    scoreReset();
    ball.reset();
    if(st==0)
    gameLoop();
st++;
}
function Restart(){
    scoreReset();
    ball.reset();
}
//gameLoop();
draw.fillStyle="darkgreen";
draw.fillRect(0,0,frame.width,frame.height);   
draw.fillStyle="white";
draw.font=`30px Arial`;
draw.fillText("Press Start to begin",15,frame.height/2);

window.addEventListener("keydown",(e)=>{
    if(e.key=="ArrowUp")
        Player_Bar.up();
    else if(e.key=="ArrowDown")
        Player_Bar.down();
   // console.log(e.key);
});