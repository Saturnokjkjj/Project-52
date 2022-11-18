//História: João queria jogar o jogo Among Us, porém, nenhum de seus dispositivos era compatível, então ele decidiu fazer o seu próprio.
//Objetivo: Explorar os efeitos sonoros relacionados ao jogo Among Us usados no jogo criado por João.
//Personagens: Laranja(Impostor)(PC) e Tripulantes(NPC / Não aparecem).
//Planejamento: Uma tela de revelação de cargos do jogo Among Us, com o PC Laranja como impostor, podendo andar pela tela e reproduzir efeitos sonoros
//Dispositivo: Web
//Plataforma: VS Code

var amogus;
var leftSnd, rightSnd, upSnd, downSnd;
var amogusImg;
var backgroundImg;

function preload() {
leftSnd = loadSound("roleReveal.mp3")
rightSnd = loadSound("sus.mp3")
upSnd = loadSound("amogus.mp3")
downSnd = loadSound("AMONGUS.mp3")

amogusImg = loadAnimation("sussy-amog.gif")

backgroundImg = loadImage("background.png")
}

function setup() {
  createCanvas(400,400);
   leftBoundary = createSprite(0, 200, 10, 400);
   rightBoundary = createSprite(400, 200, 6, 400);
   topBoundary = createSprite(200, 0, 400, 10);
   bottomBoundary = createSprite(200, 400, 400, 10);
   
   amogus = createSprite(200,200,75,75);
   amogus.addAnimation("amogging", amogusImg);
   amogus.scale = 0.1


   amogus.bounceOff(leftBoundary)
   amogus.bounceOff(rightBoundary)
   amogus.bounceOff(topBoundary)
   amogus.bounceOff(bottomBoundary) 



  var background = createSprite(200,200,200,200)
  background.addImage(backgroundImg);
  background.scale = 0.4


  background.depth = amogus.depth-1
   text("Use as setas pra fazer efeitos sonoros!", 20, 20);
}

function draw() {
  background(255,255,255);  
  
  amogus.x = World.mouseX;
  amogus.y = World.mouseY;

  if (keyWentDown(UP_ARROW)){
    upSnd.play();
  }
  
  if (keyWentDown(DOWN_ARROW)){
    downSnd.play();
  }

  if (keyWentDown(LEFT_ARROW)){
      leftSnd.play();
  }

  if (keyWentDown(RIGHT_ARROW)){
    rightSnd.play();
  }
  
  amogus.display();

  drawSprites();
}