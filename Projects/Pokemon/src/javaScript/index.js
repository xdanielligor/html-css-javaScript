//alert("Olá!"); da uma alerta na tela
/*
	O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    
	- objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

/* PASSO 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");//console.log = mostra informações na haba console, get buscar elemento pelo ID. const = valor constante

/* PASSO 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body*/
const body = document.querySelector("body");//Consultar um seletor class tag

//troca de imagem do sol pra lua
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

/* PASSO 3 - dar um jeito de identificar o clique do usuário no botão de */
botaoAlterarTema.addEventListener("click", () => {

/* PASSO 6 - verificar se o body já tem a classe modo-escuro*/
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

//  VERIFICAR SE O MODO ESCURO ESTÁ ATIVO
    if (modoEscuroEstaAtivo) {
/* PASSO 7 - remover a classe do modo-escuro do body*/
       body.classList.remove("modo-escuro");
      
/* PASSO 8 - trocar a imagem do botão de alterar tema pra sol */
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");    

    }else{
/* PASSO 4 - adicionar a classe modo-escuro no body*/
        body.classList.add("modo-escuro");

        //quando a pessoa clicar vai disparar uma ação
/* PASSO 5 - trocar a imagem do botão de alterar tema pra lua*/    
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");    
    }
})