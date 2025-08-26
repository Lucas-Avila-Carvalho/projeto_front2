const carro = { marca: 'VW', cor: 'Preto', modelo: 'GOl' };

for (let itens of Object.entries(carro)) {
  console.log(itens[0]);
}

for (let [chave, valor] of Object.entries(carro)) {
  console.log(`atributo: ${chave} | valor: ${valor}`);
}
