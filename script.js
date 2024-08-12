//TP 1.7
//Desenvolva uma função chamada verificarEstoque que receba um array de objetos representando produtos, onde cada produto tem uma propriedade quantidadeEmEstoque. A função deve retornar um array contendo apenas os produtos que têm quantidade em estoque maior que zero.

function verificarEstoque(produtos) {
    var produtosEmEstoque = [];
    for (var i = 0; i < produtos.length; i++) {
      if (produtos[i].quantidadeEmEstoque > 0) {
        produtosEmEstoque.push(produtos[i]);
      }
    }
    return produtosEmEstoque;
}

var produtos = [ 
    { nome: "Laptop", quantidadeEmEstoque: 5 }, 
    { nome: "Tablet", quantidadeEmEstoque: 0 }, 
    { nome: "Smartphone", quantidadeEmEstoque: 3 } 
];

  console.log(verificarEstoque(produtos));
