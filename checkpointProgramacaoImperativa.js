const opcoes = {
  "1": { nome: "pipoca", tempo: 10 },
  "2": { nome: "macarrão", tempo: 8 },
  "3": { nome: "carne", tempo: 15 },
  "4": { nome: "feijão", tempo: 12 },
  "5": { nome: "brigadeiro", tempo: 8 },
};

function esquentar(numeroPrato, tempo) {
  const prato = opcoes[numeroPrato];

  if (!prato) {
    return console.log('Prato inexistente');
  }

  let mensagem;
  const tempoPadrao = prato.tempo;

  if (tempo < tempoPadrao) {
    mensagem = 'Tempo insuficiente';
  } else if (tempo > tempoPadrao * 2 && tempo <= tempoPadrao * 3) {
    mensagem = 'A comida queimou';
  } else if (tempo > tempoPadrao * 3) {
    mensagem = 'Kabummm';
  } else {
    mensagem = 'Prato pronto, bom apetit!!!';
  }

  return console.log(mensagem);
}

var opcao = 1;
var tempo = 10;


console.log(esquentar(opcao, tempo));








