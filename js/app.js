// Pegar os nomes do input do html
// Armazenar eles em uma variável
// Adicionar os nomes no campo "Amigos incluídos" do html
// Sortear os nomes randomicamente 
// Validar o sorteio de forma que nenhum nome caia com a ele mesmo
// Reiniciar apagar todos os valores gerados 



let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if(nomeAmigo == '') {
        alert('Por favor, digite um nome');
        return;
    }

    if(listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo;
    }else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo;
    }

    amigos.push(nomeAmigo);
    document.getElementById('nome-amigo').value = '';

}

function sortear() {

    embaralha(amigos)
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}