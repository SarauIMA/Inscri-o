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

function toggleNomes() {
    const n = parseInt(num.value, 10) || 0;
    if (n > 1) {
    npart.style.display = 'block';
    } else {
    npart.style.display = 'none';
    }
}

num.addEventListener('input', toggleNomes);

toggleNomes();


const radios = document.getElementsByName("apresentacao");
const musicaDiv = document.getElementById("musica");
const outroDiv = document.getElementById("outro");

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

    if (selecionado === "canto" || selecionado === "danca") {
    musicaDiv.style.display = "block";
    } else if (selecionado === "outro") {
    outroDiv.style.display = "block";
    }
}

for (const radio of radios) {
    radio.addEventListener("change", verificarSelecao);
}

