function testar() {
    // Contagem de votos
    let contnaruto = 0;
    let contgoku = 0;
    let contluffy = 0;
    let contichigo = 0;
    let contyugi = 0;
    let contash = 0;
    let contAinz_Ooal_Gow = 0;

    // Array com todas as perguntas
    let perguntas = [
        'pergunta1', 'pergunta2', 'pergunta3', 'pergunta4', 'pergunta5',
        'pergunta6', 'pergunta7', 'pergunta8', 'pergunta9', 'pergunta10'
    ];

    perguntas.forEach(pergunta => {
        let radios = document.querySelectorAll(`input[name="${pergunta}"]:checked`);
        console.log(radios)
        radios.forEach(e => {
            switch (e.value) {

                case "Ainz_Ooal_Gow":
                    contAinz_Ooal_Gow++;
                    break;
                case "Naruto":
                    contnaruto++;
                    break;
                case "Goku":
                    contgoku++;
                    break;
                case "Luffy":
                    contluffy++;
                    break;
                case "Ichigo":
                    contichigo++;
                    break;
                case "Yugi":
                    contyugi++;
                    break;
                case "Ash":
                    contash++;
                    break;
                default:
                    break;
            }
        });
    });

    

    let resultado = `
        naruto = ${contnaruto * 10 + "%"}<br> 
        goku = ${contgoku * 10 + "%"}<br> 
        luffy = ${contluffy * 10 + "%"}<br> 
        ichigo = ${contichigo * 10 + "%"}<br>
        yugi = ${contyugi * 10 + "%"}<br>
        ash = ${contash * 10 + "%"}<br>
        Ainz Ooal Gow = ${contAinz_Ooal_Gow * 10 + "%"}
    `;
    document.getElementById("resultado").innerHTML = resultado;

    localStorage.setItem('Naruto', contnaruto);
    localStorage.setItem('Goku', contgoku);
    localStorage.setItem('Luffy', contluffy);


    localStorage.setItem('Ichigo', contichigo);
    localStorage.setItem('Yugi', contyugi);
    localStorage.setItem('Ash', contash);
    localStorage.setItem('Ainz_Ooal_Gow', contAinz_Ooal_Gow);

    // Verificando qual personagem tem mais votos
    let maior = 0;
    let pagina = '';

    if (contnaruto > maior) {
        maior = contnaruto;
        pagina = 'naruto';
    }
    if (contgoku > maior) {
        maior = contgoku;
        pagina = 'goku';
    }
    if (contluffy > maior) {
        maior = contluffy;
        pagina = 'luffy';
    }
    if (contichigo > maior) {
        maior = contichigo;
        pagina = 'ichigo';
    }
    if (contyugi > maior) {
        maior = contyugi;
        pagina = 'yugi';
    }
    if (contash > maior) {
        maior = contash;
        pagina = 'ash';
    }
    if (contAinz_Ooal_Gow > maior) {
        maior = contAinz_Ooal_Gow;
        pagina = 'Ainz_Ooal_Gow';
    }

    if (maior == 0) {
        pagina = 'guia_vazio';
    }



    // Redirecionar para a página do personagem vencedor
    setTimeout(() => { 
        window.location.href = pagina + '.html'; 
    }, 3000);
}


function lerPerguntaAlternativas(pergunta, alternativas) {
    const texto = `${pergunta}. As alternativas são: ${alternativas.join(', ')}.`;
    const synth = window.speechSynthesis; 
    const utterance = new SpeechSynthesisUtterance(texto); 
        synth.speak(utterance); 
}


    












