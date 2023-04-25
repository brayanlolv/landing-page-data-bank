
let smalltopbaar= ` <div class="dropdown">
<img id="menuicon" src="img/dpicon.png" alt="">
<div class="dropdown-content">
    <a href="#sobrenos">Criação e propósito</a>
    <a href="#sobrenos">Sobre nós>/a>
    <a href="#play">Play Party</a>
    <a href="#moneyborn">Money Born</a>
    <a href="#securitylife">Securiy Life</a>
    <a class="linkdesktop" download="planodenegocio.pdf" href="">Para investidores </a>
       
    
</div>
</div>

 
<img src="logo.png" alt="" id="logo">





<div id="login">login</div>             
`



let larguratela = window.innerWidth
let topbaar =document.getElementById("topbaar")
let originalbaar=topbaar.innerHTML

addEventListener("resize",mudou)

if(larguratela<900){
    topbaar.innerHTML=smalltopbaar ;
}



console.log(larguratela)

function mudou(){

    larguratela = window.innerWidth
    console.log(larguratela)

    if(larguratela<900){
        topbaar.innerHTML=smalltopbaar ;
    }

    else{
        topbaar.innerHTML=originalbaar
    }

 


}  

let lista =document.getElementById("lista")

function mostrar(){ 

lista.style.display="flex";
lista.style.flexDirection=" column";


}

function tirar(){
    lista.style.display="none";

    
}
let servicos =document.getElementById("servicos")

servicos.addEventListener("mouseenter",mostrar)
servicos.addEventListener("mouseleave",tirar)



