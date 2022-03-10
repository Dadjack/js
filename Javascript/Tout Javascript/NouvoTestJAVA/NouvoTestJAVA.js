// let monTitre = document.querySelector('h1');



// monTitre.addEventListener ("click",function(){


//     setInterval(() => {
//         monTitre.style.transform = "rotate(520deg)";
//     }, 1000);
// })

// let rotation = 90;
// monTitre.addEventListener ("click",function(){
//         monTitre.style.transform = "rotate(1080deg)";
//         monTitre.style.color = "red";
//         monTitre.style.transition = "3s";
// });


// let tab = ["rotate(90deg)","rotate(180deg)","rotate(270deg)","rotate(360deg)","rotate(450deg)","rotate(540deg)"];
// let monTxt = document.monTitre.querySelector("h1")

// monTxt.addEventListener ("click",function() {
//     for (let i =0; i < tab.length; i++){
//         monTxt.style.transform = tab[0];
//         monTxt.style.color = "random";
//     }   
// }

let monTxt = document.querySelector("h1");

monTxt.addEventListener ("click",function(){
    if (monTxt.style.transform = "rotate(90deg)");
        monTxt.style.color = "red";
        monTitre.style.transition = "1s";{
    }else if monTxt.style.transform = "rotate(180deg)";
            monTxt.style.color = "yellow";
            monTitre.style.transition = "1s";{        
    }else if monTxt.style.transform = "rotate(270deg)";
        monTxt.style.color = "blue";
        monTitre.style.transition = "1s"; 
    }else if monTxt.style.transform = "rotate(360deg)";
        monTxt.style.color = "green";
        monTitre.style.transition = "1s";{ 
    }else if (monTxt.style.transform = "rotate(450deg)");
        monTxt.style.color = "purple";
        monTitre.style.transition = "1s";{ 
    }else if (monTxt.style.transform = "rotate(540deg)");
        monTxt.style.color = "black";
        monTitre.style.transition = "1s";{
                }                        
            }
        }
    }    
};






// function calcRotationAroundAxis( obj3D, axis, angle ){

//     var euler;

//     if ( axis === "x" ){
//         euler = new THREE.Euler( angle, 0, 0, 'XYZ' );      
//     }

//     if ( axis === "y" ){
//         euler = new THREE.Euler( 0, angle, 0, 'XYZ' );              
//     }

//     if ( axis === "z" ){
//         euler = new THREE.Euler( 0, 0, angle, 'XYZ' );      
//     }
//     obj3D.position.applyEuler( euler );
// }

// function calcRotationIn3D( obj3D, angles, order = 'XYZ' ){

//    var euler;

//    euler = new THREE.Euler( angles.x, angles.y, angles.z, order );

//    obj3D.position.applyEuler( euler );


// monTitre.addEventListener("click",function(event){
//     for (let i =0; i<10; i++){
//         setInterval(function(){
//                     monTitre.style.WebkitTransitionDuration="1s";
//                     monTitre.style.Transform = 'rotate(40deg)';
//     }

// });