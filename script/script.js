function logar(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var errou = document.getElementById('erro')

    if (login === 'admin' && senha === 'admin') {
        location.href = 'portalAluno.html'
    } else if (login === 'prof' && senha === 'prof'){
        location.href = 'portalProf.html'
    } 
     else {
        errou.innerHTML= 'Errou senha ou usuario'
    }
}
