
let smalltopbaar= ` <div class="dropdown">
<img id="menuicon" src="img/dpicon.png" alt="">
<div class="dropdown-content">
    <a href="">criaçao </a>
    <a href="">proposito </a>
    <a href="#sobrenos">sobre nos</a>
    <a href="#play">Play Party</a>
    <a href="#moneyborn">Money Born</a>
    <a href="securitylife">Securiy Life</a>
    <a href="">para investidores </a>  
    
</div>
</div>


<img src="logo.png" alt="" id="logo">





<div id="login">login</div>             
`

let larguratela = window.innerWidth
let topbaar =document.getElementById("topbaar")
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
}

