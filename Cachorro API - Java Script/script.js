const botao = document.getElementById("buscar");
const imagem = document.getElementById("cachorro");

async function buscarCachorro() {
  try {
    console.log("Buscando cachorro...");

    const resposta = await fetch("https://dog.ceo/api/breeds/image/random");

    const dados = await resposta.json();

    console.log(dados);
    imagem.setAttribute("src", dados.message);

    console.log(imagem.src);
    imagem.src = dados.message;
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

botao.addEventListener("click", buscarCachorro);
