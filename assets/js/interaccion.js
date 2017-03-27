//FUNCION PARA PREVISUALIZAR EL COMANTARIO//
function previsualizar() {
  var texto= document.getElementById('textoComentario').value;
  document.getElementById('previoComentario').innerHTML = texto;
}
//FUNCIONES DE ESTILO SEGUN SE INDICA EN CADA UNA DE ELLAS PARA LOS BOTONES//
//TEXTO//
function textoGrande() {
  document.getElementById('previoComentario').style.fontSize = "250%"
}

function textoMediano() {
  document.getElementById('previoComentario').style.fontSize = "150%"
}

function textoChico() {
  document.getElementById('previoComentario').style.fontSize = "70%"
}

//COLOR FONDO Y LETRA//
function textoColor(){
  var ingresaColor = prompt("Ingresa el codigo de color o nombre en inglés: \n ej. white o #ffffff");
  document.getElementById('previoComentario').style.color = ingresaColor;
}

function fondoColor() {
  var ingresafondo = prompt("Ingresa el codigo de color o nombre en inglés: \n ej. black o #000000");
  document.getElementById('previoComentario').style.backgroundColor = ingresafondo;

}

//ALINEAR//
function alinearIzq(){
  document.getElementById('previoComentario').style.textAlign = "left";
}

function alinearCentro(){
  document.getElementById('previoComentario').style.textAlign = "center";
}

function alinearDerecha(){
  document.getElementById('previoComentario').style.textAlign = "right";
}

//FUNCION PARA ENVIAR A LA PUBLICAION DE VER EL COMENTARIO//
function imprimirComentario(){
   var recibirComentario = document.getElementById('previoComentario');
   var publicarComentario = recibirComentario.cloneNode(true);
   publicarComentario.removeAttribute ("id");

   var publicado = document.getElementById('verComentario');
   verComentario.insertBefore(publicarComentario, publicado.firstChild);

   var separador = document.createElement("hr");
   verComentario.insertBefore(separador, publicado.firstChild);

}
