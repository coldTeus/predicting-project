// variáveis ?
// dados de entrada ?
// dados de saída?

// selecionar o input Pergunta da página HTML
const inputQuestion = document.querySelector('#inputQuestion')
// selecionar elemento para visualizar a resposta na tela
const answerElement = document.querySelector('#answer')
// respostas padrões a serem geradas
const answers = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]
// clicar em fazer perguntas
function askQuestion() {
  // Regra para só aparecer uma resposta caso o campo de pergunta seja preenchido
  if (inputQuestion.value == '') {
    alert('Type your question!')
    return
  }
  // surgir pergunta junto com a resposta
  const question = '<div>' + inputQuestion.value + '</div>'
  // gerar número aleatório
  const totalAnswers = answers.length
  const randomNumber = Math.floor(Math.random() * totalAnswers)
  answerElement.innerHTML = question + answers[randomNumber]

  // Sumir a resposta após um determinado tempo (3s)
  setTimeout(function() {
    answerElement.style.opacity = 0;
  }, 3000)
}
