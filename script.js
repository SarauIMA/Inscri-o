const script_do_goole = 'https://script.google.com/macros/s/AKfycbw48EuS-cH7rlEIsZ-vOgh3G7M2cZmNkN9mJ0mKsMJFGN_H78sp0jFiZDviXY3bZeKSMA/exec'
const dados_do_formulario = document.forms['formulario-contato'];

dados_do_formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(script_do_goole, { method: 'POST', body: new FormData(dados_do_formulario) })
    .then(response => {
        alert('Formulário enviado com sucesso!', response);
        dados_do_formulario.reset();
    })
    .catch(error => 
        alert('Erro ao enviar o formulário', error));
    });

function mostrar(){
    let serie = document.getElementById("serie");
    if(
        serie.style.display === "none" || serie.style.display === ""
    ) { serie.style.display = "block"}
    else{
        serie.style.display = "none"
    }
}


const num = document.getElementById('numero');
const npart  = document.getElementById('nomepartipantes');
const inp = document.getElementById('nomepartipantesInput');
const chk = document.getElementById('participantes');

function toggleNomes() {
    const n = parseInt(num.value, 10) || 0;
    
    if (chk.checked){
        npart.style.display = 'none';
        inp.required = false;
        num.required = false;
    }
    else{
        if (n > 1) {
        npart.style.display = 'block';
        inp.required = true;
        }
        else {
        npart.style.display = 'none';
        inp.required = false;
        }
    } 
}

num.addEventListener('input', toggleNomes);

toggleNomes();


const radios = document.getElementsByName("apresentacao");
const musicaDiv = document.getElementById("musica");
const outroDiv = document.getElementById("outro");
const musicaInput = document.getElementById("musicaInput");
const outroInput = document.getElementById("outroInput");

function verificarSelecao() {
    let selecionado = null;
    for (const radio of radios) {
    if (radio.checked) {
        selecionado = radio.value;
        break;
    }
    }

    // esconde os dois antes de mostrar o correto
    musicaDiv.style.display = "none";
    outroDiv.style.display = "none";

    if (selecionado === "outro") {
    outroDiv.style.display = "block";
    outroInput.required = true;
    }
    else if (selecionado === "canto" || selecionado === "danca" || selecionado === "instrumento") {
    musicaDiv.style.display = "block";
    musicaInput.required = true;
    } 
    
    else{
        musicaInput.required = false;
        outroInput.required = false;
    }
}

for (const radio of radios) {
    radio.addEventListener("change", verificarSelecao);
}

const params = new URLSearchParams(window.location.search);
const musica = params.get("Nome_Musica");
const cant = document.getElementById("cant")
if (musica) {
document.getElementById("musicaInput").value = musica;
cant.checked = true;
verificarSelecao();
}