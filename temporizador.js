//acessando os elementos pelo id
const elementoContador = document.getElementById('tempo')
const mensagem = document.getElementById('mensagem')

//inicar o contador no zero
let tempoDecorrido = parseInt(sessionStorage.getItem('tempoSessao')) || 0 //sessionStorage = armazenamento temporario do navegador //|| 0 = se o tempoDecorrido voltar como Nan (NotANumber) ele retorna e comeca com o valor 0
elementoContador.textContent = tempoDecorrido

//funcao agora pra o contador ficar funcional e realmente contar os segundos
const atualizarTempo = () => {
    tempoDecorrido++  //incrementa o tempo
    elementoContador.textContent = tempoDecorrido  //atualiza o dom (o import)
    sessionStorage.setItem('tempoSessao', tempoDecorrido)


    //mostra a mensagem APOS OS 10 SEGUNDOS
    if (tempoDecorrido > 10) {
        mensagem.style.opacity = '1'
    }

}

//inicia o contador (executa a cada 1000ms = 1s)
const intervalo = setInterval(atualizarTempo, 1000)
