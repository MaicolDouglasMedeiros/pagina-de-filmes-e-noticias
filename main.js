const filmes=document.querySelector("#filmes");
const noticias=document.querySelector("#noticias");
const abanoticias=document.querySelector("#abanoticias");
const cristo=document.querySelector("#cristo");
const versiculo=document.querySelector("#versiculo");
const versiculo1=document.querySelector("#versiculo1");
const preencher=document.querySelector("#preencher");
const contador=document.getElementById("contador");
const contador1=document.getElementById("contador1");
const contador3=document.getElementById("contador2");


var cristocena1=document.createElement("img");
cristocena1.src="cristocena1.webp"
var cristocena2=document.createElement("img");
cristocena2.src="cristocena2.jpg";


var ultimohomemcena1=document.createElement("img");
ultimohomemcena1.src="ultimohomemcena1.webp"
var ultimohomemcena2=document.createElement("img");
ultimohomemcena2.src="ultimohomemcena2.jpg";


var milagreimagem1=document.createElement("img");
milagreimagem1.src="milagre1.jpg";
var milagreimagem2=document.createElement("img");
milagreimagem2.src="milagre2.jpg";




noticias.addEventListener('click', function() {
    abanoticias.scrollIntoView({ behavior: 'smooth' });
});


filmes.addEventListener('click',function() {
    cristo.scrollIntoView({ behavior: 'smooth' });
});

let count=0;

versiculo.addEventListener('click', function() {
    count++;

preencher.innerHTML = '';
    if(count=== 1)
    preencher.appendChild(cristocena1);

    else if(count===2)
    preencher.appendChild(cristocena2);
})
let count1=0;
versiculo1.addEventListener('click', function() {
    count1++;
preencher1.innerHTML = '';
    if(count1=== 1)
    preencher1.appendChild(ultimohomemcena1);

    else if(count1===2)
    preencher1.appendChild(ultimohomemcena2);
})
let count3=0;
versiculo3.addEventListener('click', function() {
    count3++;
preencher3.innerHTML = '';
    if(count3=== 1)
    preencher3.appendChild(milagreimagem1);

    else if(count3===2)
    preencher3.appendChild(milagreimagem2);
}

);

