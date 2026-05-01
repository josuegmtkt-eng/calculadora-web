function sumar() {
    // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
     //Sumar 
     let sumar = num1 + num2;
     //Mostra resultado
     document.getElementById("resultado").innerHTML = "resultado: " + sumar;  
    
    }
  
    function restar(){
    // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
     //sumar 
     let restar = num1 - num2;
     //Mostra resultado
     document.getElementById("resultado").innerHTML = "resultado: " + restar;  

    }
    
function multiplicar() {
    // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
     //Multiplicar
     let multi = num1 *num2;
     //Mostra resultado
     document.getElementById("resultado").innerHTML = "resultado: " + multi;  
    }   

    function dividir() {
    // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
     //Divir
     let div = num1 / num2;
     //Mostra resultado
     document.getElementById("resultado").innerHTML = "resultado: " + div;  
        }