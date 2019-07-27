
////////////////////////////////////
/////////// Aplicacion  ////////////


// generar numeros que no pasen del nivel actual
  // this constant will count the points (how many times the person answers correctly)
   var i = 0;
   var datos;
   var estaTabla;
   // Preguntar que tablas se esta aprendiendo
   var nivel = document.getElementById('elegirNivel').value;
   var rangoUser = document.getElementById('elegirRango').value;
   var respuestUser = document.getElementById('respuesta').value;

   function getNivel(){
      nivel = document.getElementById('elegirNivel').value;
      rangoUser = document.getElementById('elegirRango').value;
      upadateNivel();
      document.getElementById('respuesta').focus();
      init();
   }
      document.getElementById('setter').addEventListener('click',getNivel);
      document.getElementById('elegirNivel').addEventListener('keypress', function(event){
          if(event.keyCode === 13 || event.which === 13){
            getNivel();
          }

      });
      document.getElementById('respuesta-button').addEventListener('click',evaluateAnswer);
      document.getElementById('respuesta').addEventListener('keypress', function(event){
          if(event.keyCode === 13 || event.which === 13){
            evaluateAnswer();
          }
        });


      function upadateNivel(){
        document.querySelector('span.tabla-actual').textContent = nivel;

      }
function init(){

      function generarNumeros(nivelEste, rango){
        // Prueba para intentar crear tablas
        /////////
        // funcion para crear las tablas
        function Tablas(numero, rango){
        // aqui iran los numeros por los cuales se va a multiplicar las tablas
          var indiceGeneral = 0;
          var tablas = [];
          var ejemplos = [];
          var respuestas = [];
          // this converts the input to an integral
          var rangoReal = parseInt(rango) + 1

          for (var i = 0; i < rangoReal ; i++) {
            tablas.push(indiceGeneral)
            indiceGeneral++
          }


          for (var i = 0; i < tablas.length; i++) {
            ejemplos.push(`${numero} times ${tablas[i]} equals?`);
            respuestas.push(numero * tablas[i]);
          }

          return {ejemplos, respuestas, indiceGeneral, rango};


        }
         estaTabla = new Tablas(nivelEste, rango);

        var alea1 = Math.round(Math.random() * rangoUser);

        document.querySelector('span.numero1').textContent = estaTabla.ejemplos[alea1];

          return repuesta = estaTabla.respuestas[alea1]


        }


        datos = generarNumeros(nivel, parseInt(rangoUser));
  }


  function evaluateAnswer(){
          respuestUser = document.getElementById('respuesta').value;

          // revisar si la respuesta es correcta
          if(respuestUser == datos){
           i = i + 1;
                   document.getElementById('respuesta').focus();
           alert('Well done!!!');

                document.getElementById('respuesta').value ='';
           if(i < 10){

             getNivel();

             document.getElementById('respuesta').focus();
             init();

          }else{
              alert('You have finished!!!!');
          }
          }else if(respuestUser == 'salir'){
          alert('You have left');

          }else{
            alert('That is not the correct answer');
            getNivel();
                  document.getElementById('respuesta').focus();
            init();
      }
}
