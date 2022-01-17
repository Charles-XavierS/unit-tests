/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, age) => {
  if (name === undefined || age === undefined) {
    return undefined;
  }
  const line1 = `Oi, meu nome é ${name}!`;
  const line2 = `Tenho ${age} anos,`;
  const line3 = 'trabalho na Trybe e mando muito em programação!';
  return `${line1}\n${line2}\n${line3}\n#VQV!`;
};

module.exports = vqv;
