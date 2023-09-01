const form = document.getElementById('form'); /*Pega a variavel form*/

form.addEventListener('submit', function(event){ /*Impede o carregamento da pagina quando os dados forem enviados*/

    event.preventDefault(); /*Impede que a pagina atualize antes de dar o resultado */

    const weight =document.getElementById('weight').value; /*Pega o valor do input weight */
    const height =document.getElementById('height').value;/*Pega o valor do input height */

    const bmi =  (weight / (height * height)).toFixed(2);//Só aparece duas casa após a virgula

    const value = document.getElementById ('value'); //Pega esse valor pra adicionar um valor dentro dele
    let description = ''; /*Cria a variavel description para dar varios valores para ela no ifs*/ 

    value.classList.add('attention'); /*Adicionando a class attention pra ficar tudo vermelho */

    document.getElementById('infos').classList.remove('hidden'); /*Remove o hidden fazendo as informações voltarem*/ 

    if (bmi<18.5){
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18 && bmi <= 25){
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! Você está com sobrepeso!';
    }else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado! Você está com obsidade moderada!';
    }else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obsidade severa!';
    }else{
        description = 'Cuidade! Você está com obsidade morbida!'
    }

    value.textContent = bmi.replace('.' , ','); /*Mostra o resultado, Replace faz uma troca*/
    document.getElementById('description').textContent = description; /*Ta adicionando as descricoes do if */

});
