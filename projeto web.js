function testar(){

    let contnaruto=0;
    let contgoku=0;
    let contluffy=0;
    let contichigo=0;
    let contyugi=0;
    let contash=0;
    let contAinz_Ooal_Gow=0;

let radios = documento.querySelectorAll('input[type="radio"]')
console.log(radios)

radios.array.forEach(e => {
    
if(e.checked) {

    if(e.value == "naruto"){
        contnaruto++;
    }else if(e.value == "goku"){
        contgoku++;
    }else if(e.value == "luffy"){
        contluffy++;
    } else if(e.value == "ichigo"){
        contichigo++;
    }else if(e.value == "yugi"){
        contyugi++;
    }else if(e.value == "ash"){
        contash++;
    }else if(e.value == "Ainz Ooal Gow"){
        contAinz_Ooal_Gow++;
        }
    }
});

let resultado = `naruto = ${contnaruto}<br> 
goku = ${contgoku}<br> 
luffy = ${contluffy}<br> 
ichigo = ${contichigo}<br>
yugi = ${contyugi}<br>
ash = ${contash}<br>
Ainz Ooal Gow = ${contAinz_Ooal_Gow}`;

document.getElementById("resultado").innerHTML = resultado;

localStorage.setItem('naruto', contnaruto) 
localStorage.setItem('goku', contgoku) 
localStorage.setItem('luffyr', contluffy) 
localStorage.setItem('ichigo', contichigo)
localStorage.setItem('yugi', contyugi)
localStorage.setItem('ash', contash)
localStorage.setItem('Ainz Ooal Go', contAinz_Ooal_Gow)


let maior = 0 
let pagina
if(contnaruto > maior){
    pagina = 'naruto' 
} 
    if(contgoku > maior){ 
    pagina = 'goku' 
}   if(contluffy > maior){ 
    pagina = 'luffy' 
}   if(contichigo > maior){ 
    pagina = 'ichigo' 
}   if(contyugi > maior){ 
    pagina = 'yugo' 
}   if(contash > maior){ 
    pagina = 'ash' 
}   if(contAinz_Ooal_Gow> maior){ 
    pagina = 'Ainz Ooal Go' 
}

setTimeout(() => { 
    window.open(pagina+'naruto.html') 
}, 5000);










}

    



















