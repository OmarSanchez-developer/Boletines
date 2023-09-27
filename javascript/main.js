/*
DOM
//querySelector / querySelectorAll
let links = document.querySelectorAll('a');
//funcion de recorrer mi arreglo de links
links.forEach(function(link){
console.log(links);
})
let celdas = document.querySelectorAll('td');
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        //"click" cuentas los cliks dados en la pagina
    console.log(this);
    })
});
//Obtener los elementos de la clase .close
//let links = document.querySelectorAll(".close");
*/

//Recorrerlos
links.forEach(function(link){

    //Agregar un evento click a cada uno de ellos
     link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        
        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //Agregar clases para animar su saludo fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href = '/';
        },600);

       // setInterval(() => { 

     return false;
    });
});

// function para agregar o quitar iconos estrellas
/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");
    icono.classList.add("fa-star-o");  
})
*/
