/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quem é o autor do livro Dom Quixote?",
    alternativaA : "William Shakespeare",
    alternativaB : "Charles Dickens",
    alternativaC : "Victor Hugo",
    alternativaD : "Miguel de Cervantes",
    correta      : "Miguel de Cervantes",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Por que dom quixote desafiava moinhos de vento ?",
    alternativaA : "Por que achava que eram gigantes",
    alternativaB : "Por que achava que eram Ogros",
    alternativaC : "Por que achava que eram Orcs",
    alternativaD : "Por que achava que eram Dragoes",
    correta      : "Por que achava que eram gigantes",
}

const q3 = {
    numQuestao   : 3,
    pergunta : "Dom Quixote, ao sair em busca de suas aventuras veste seu traje e monta em seu cavalo, que eram respectivamente:",
    alternativaA : "Uma armadura brilhosa e enfeitada com joias, um cavalo branco e forte, digno de um grande aventureiro",
    alternativaB : "Uma armadura simples como a de um cavaleiro medieval e um cavalo de porte médio mas muito ágil",
    alternativaC : "uma armadura enferrujada e um cavalo fraco e bem magro",
    alternativaD : "um pijama de algodão e um burro velho",
    correta      : "uma armadura enferrujada e um cavalo fraco e bem magro",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual era a idade de Dom Quixote de acordo com os livros?",
    alternativaA : "58",
    alternativaB : "63",
    alternativaC : "58",
    alternativaD : "50",
    correta      : "50",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quais destes personagens NÃO se aplicam ao livro de Dom Quixote:",
    alternativaA : "Dulcinéa",
    alternativaB : "Antonia Quijana",
    alternativaC : "Arthuro Passamonte",
    alternativaD : " Sancho Pança",
    correta      : "Arthuro Passamonte",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o nome verdadeiro do personagem Dom Quixote antes de ele adotar o título de Dom Quixote de la Mancha?",
    alternativaA : "Alonso Quixano",
    alternativaB : "Juan Panza",
    alternativaC : "Rodrigo Manchego",
    alternativaD : "Antonio Cervantes",
    correta      : "Alonso Quixano",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual é a visão distorcida de Dom Quixote sobre sua amada, Dulcineia?",
    alternativaA : "Uma camponesa",
    alternativaB : "Uma rainha",
    alternativaC : "Uma feiticeira",
    alternativaD : "Uma princesa",
    correta      : "Uma feiticeira",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "O que Dom Quixote acredita que é seu fiel cavalo Rocinante?",
    alternativaA : "Um corcel alado",
    alternativaB : "Um cavalo mágico",
    alternativaC : "Um unicórnio",
    alternativaD : "Um Pégaso",
    correta      : "Um corcel alado",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Quem é o personagem que zomba e ridiculariza Dom Quixote em várias ocasiões?",
    alternativaA : "Sancho Panza",
    alternativaB : "Rocinante",
    alternativaC : "Dulcineia",
    alternativaD : "O padre",
    correta      : "O padre",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual é o nome da terra fictícia onde a maior parte das aventuras de Dom Quixote ocorre?",
    alternativaA : "Mancha",
    alternativaB : "Espanha",
    alternativaC : "La Mancha",
    alternativaD : "Castela",
    correta      : "La Mancha",
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "Соmо ѕе сhаmаvаm о саvаlо е о burrо dе Dоm Quіхоtе е Ѕаnсhо Раnçа rеѕресtіvаmеntе?",
    alternativaA : "Ruçо е Rосіnаntе",
    alternativaB : "Роlісаrро е Rосіnаntе",
    alternativaC : "Rосіnаntе е Вurrо",
    alternativaD : "Сіnzеntо е Ruçо",
    correta      : "Rосіnаntе е Вurrо",
}

const q12 = {
    numQuestao   : 12,
    pergunta     : "Qual o nome da sobrinha de Dom Quixote?",
    alternativaA : "Manuela",
    alternativaB : "Felipa",
    alternativaC : "Antonia",
    alternativaD : "Bela",
    correta      : "Antonia",
}

const q13 = {
    numQuestao   : 13,
    pergunta     : "Qual o título original da obra?",
    alternativaA : "El ingenioso hidalgo Don Quixote de La Mancha",
    alternativaB : "El loco Don Quixote de La Mancha",
    alternativaC : "Las aventuras de Don Quiote e Sancho Pança",
    alternativaD : "Don Quixote de la Mancha",
    correta      : "El ingenioso hidalgo Don Quixote de La Mancha",
}

const q14 = {
    numQuestao   : 14,
    pergunta     : "Dom Quixote, conhecido como Cavaleiro da Triste Figura, passou a ser chamado de:",
    alternativaA : "Cavaleiro dos Leões",
    alternativaB : "Cavaleiro Solitário",
    alternativaC : "Cavaleiro Lendário",
    alternativaD : "Cavaleiro dos Magos",
    correta      : "Cavaleiro dos Leões",
}

const q15 = {
    numQuestao   : 15,
    pergunta     : "Qual era o nome da amada e desejada princesa  de Dom Quixote?",
    alternativaA : "Marta",
    alternativaB : "Maria",
    alternativaC : "Dulcinéia",
    alternativaD : "Rosa",
    correta      : "Dulcinéia",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}
