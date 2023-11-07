document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'usuario' && password === 'senha') {
        window.location.href = 'pagina_sucesso.html';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
};
