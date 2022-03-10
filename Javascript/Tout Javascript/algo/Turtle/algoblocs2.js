// Initialisation A2
setPos(100,200);
faceRight();
changeColor(color.red);
setLineWidth(5);

//Réalisation B13
/*
for (let i=0;i<8;i++){
    forward(100);
    arcLeft(0,135);
    forward(50);
    right(90);
    forward(50);
    right(90);
}
*/

//Réalisation B19
/*for(let i=0;i<4;i++){
    arcLeft(100,180);
    faceRight();
}    
faceUp();
up();
forward(100);
down();
faceLeft();
for(let i=0;i<4;i++){
    arcLeft(100,180);
    faceLeft();
} 
*/

//Réalisation
/*
for (let i=0;i<3;i++){
    changeColor(color.black);
    forward(100);
    left(360/3);
}  
for (let i=0;i<4;i++){
    changeColor(color.red);
    forward(100);
    left(360/4);
}
for (let i=0;i<5;i++){
    forward(100);
    left(360/5);
} 
for (let i=0;i<6;i++){
    forward(100);
    left(360/6);
}
for (let i=0;i<7;i++){
    changeColor(color.green);
    forward(100);
    left(360/7);
}
for (let i=0;i<8;i++){
    forward(100);
    left(360/8);
}
for (let i=0;i<9;i++){
    forward(100);
    left(360/9);
}
*/

//répéter 10 fois:
/*
for(let j = 0;j < 10; j++){
    for (let i=0 ;i< numberOfSides ; i++){
        forward(100);
        left(360/numberOfSides);
    {
} 
*/
/*
let n = 3;  
 for(let n = 3; n < 13; n++){
    for (let i=0 ;i< n ; i++){
        forward(100);
        left(360/n);
    }
} 
*/
for(let i = 0 ; i < 4 ; i++){
    for( let j=0;j<3;j++){
        forward(200);
        right(120);
    }
    forward(200);
}


0,0,255      127,0,255       255,0,255