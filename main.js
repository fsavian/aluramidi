function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e) {
        if(e.code === "Enter" || e.code === "Space") {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


// // While!
// let contador = 0;

// while (contador < listaDeTeclas.length) {
    
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];

//     //template string
//     const idAudio = `#som_${instrumento}`;
    
//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     };

//     contador = contador + 1;
// }