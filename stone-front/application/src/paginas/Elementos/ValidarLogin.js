function Credenciais() {
    var senha = document.getElementById('password')
    var usuario = document.getElementById('email')

    if (usuario.value == "leo@stone.com.br" && senha.value == 123456) {
      window.alert("Teste: Essas credenciais estão corretas!")
    }
    else {
      window.alert("Teste: Email ou senha incorretos!")
    }
}

export default Credenciais;