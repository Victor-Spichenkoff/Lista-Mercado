const fs = require('fs');

export default async function handler(req, res) {
  const caminho = './products.json'
  let products
   fs.readFile(caminho, 'utf-8', (e, conteudo ) => {
    // const obj = JSON.parse(conteudo)
    // products = obj
    console.log(products)
    res.status(200).json({ conteudo })
})
}
