let xBOLINHA=300;
let yBOLINHA=200;
let dIAMETRO=15;
let raio=dIAMETRO/2;

//velocidade da bolinha

let velocidadeXBOLINHA=6;
let velocidadeYBOLINHA=6;

//variavel da raquete
let xRAQUETE=5;
let yRAQUETE=150;
let raqueteComprimeno=10;
let raqueteAltura=90;

//variavel do oponente
let xRaqueteOponente=585;
let yRaqueteOponente=150;
let velocidadeYOponente;

let colidiu=false;
//placar do jogo
let meusPontos=0;
let PontosDoOponente=0;

    function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRAQUETE,yRAQUETE);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqeteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
    circle(xBOLINHA,yBOLINHA,dIAMETRO);
}
function movimentaBolinha(){
    xBOLINHA+=velocidadeXBOLINHA;
  yBOLINHA+=velocidadeYBOLINHA;
}
function verificaColisaoBorda(){
    if (xBOLINHA+raio>width|| 
  xBOLINHA-raio<0){
    velocidadeXBOLINHA*=-1;
  }
  if(yBOLINHA+raio>height||
    yBOLINHA-raio<0
  ){
    velocidadeYBOLINHA*=-1;
  }
}
function mostraRaquete(x,y){
    rect(x,y,raqueteComprimeno,raqueteAltura);
}
function movimentaMinhaRaquete(){
     if(keyIsDown(UP_ARROW)){
        yRAQUETE-=10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRAQUETE+=10;
    }
}
function verificaColisaoRaquete(){
    if(xBOLINHA-raio<xRAQUETE+raqueteComprimeno&&yBOLINHA-raio<
    yRAQUETE+raqueteAltura&&yBOLINHA+raio>yRAQUETE){
        velocidadeXBOLINHA*=-1;
    }
}
function verificaColisaoRaqueteOponente(){
    if(xBOLINHA+raio>xRaqueteOponente-raqueteComprimeno&&yBOLINHA-
    raio<yRaqueteOponente+raqueteAltura&&yBOLINHA-raio<
    yRaqueteOponente+raqueteAltura){
        velocidadeXBOLINHA*=-1;
    }
}


function movimentaRaqeteOponente(){
     if(keyIsDown(87)){
        yRaqueteOponente-=10;
    }
    if(keyIsDown(83)){
        yRaqueteOponente+=10;
    }
}
function incluiPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140,0))
    rect(150,10,40,20)
    fill(color(255,140,0))
    rect(450,10,40,20)
    fill(255)
    text(meusPontos,170,26);
    text(PontosDoOponente,470,26)
}
function marcaPonto(){
    if(xBOLINHA>590){
        meusPontos+=1;
    }
    if(xBOLINHA<10){
        PontosDoOponente+=1
    }
}