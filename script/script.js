function adicionarParada() {
    const paradasContainer = document.getElementById('paradas');
    const novaParada = document.createElement('div');
    novaParada.classList.add('parada-container');

    const inputParada = document.createElement('input');
    inputParada.type = 'text';
    inputParada.name = 'parada[]';
    inputParada.placeholder = 'Digite o ponto de parada';

    const btnRemover = document.createElement('button');
    btnRemover.type = 'button';
    btnRemover.classList.add('btn-remove');
    btnRemover.textContent = '-';
    btnRemover.addEventListener('click', function() {
        removerParada(this);
    });

    novaParada.appendChild(inputParada);
    novaParada.appendChild(btnRemover);

    paradasContainer.appendChild(novaParada);
}

function removerParada(element) {
    const paradasContainer = document.getElementById('paradas');
    const paradaRemovida = element.parentNode;
    paradasContainer.removeChild(paradaRemovida);
}