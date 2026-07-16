function saludo() {
    let x = document.getElementById("msg").value;
    alert(x);
} 
function sumar(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    //document.getElementById('n3').value=(n1+n2);
    let resultado = n1 + n2;
    alert("El resultado es: " + resultado);
}
function numero(){
    let x = document.getElementById('r');
    let i;
    let t;
    for(let i= 0; i<10; i++){
    t += '<h1> Otro saludo ' + i + ' </h1>';
}
x.innerHTML = t; //Forma de inyectarle un codigo DE HTML

}