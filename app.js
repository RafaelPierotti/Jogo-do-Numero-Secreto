let listDrawnNumbers = [];
let difficult = 10;
let secretNumber = generateAleatoryNumber();
let tries = 1;


function displayText(tag, text){
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function displayInicialMessage(){
    displayText('h1', 'Jogo do número secreto');
    displayText('p', 'Escolha um número entre 1 e 10');
}

displayInicialMessage();

//console.log(secretNumber);

function checkKick(){
    let kick = document.querySelector('input').value;

    if (kick == secretNumber){
        displayText('h1', 'Acertou!');
        let textTries = tries == 1 ? 'tentativa' : 'tentativas';
        displayText('p', `Você descobriu o número secreto com ${tries} ${textTries}!`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (kick > secretNumber){
            displayText('p', 'O número secreto é menor que o chute!');
        } else {
            displayText('p', 'O número secreto é maior que o chute');
        }
        tries ++;
        
        clearField();
    }
}

function generateAleatoryNumber(){
    let chosenNumber = parseInt(Math.random() * difficult + 1);
    let numberElementsList = listDrawnNumbers.length;

    if (numberElementsList == difficult){
        listDrawnNumbers = [];
    }
    
    if (listDrawnNumbers.includes(chosenNumber)){
        return generateAleatoryNumber();
    } else {
        listDrawnNumbers.push(chosenNumber);
        return chosenNumber;
    }
}

function clearField(){
    kick = document.querySelector('input');
    kick.value = '';
}

function newGame(){
    secretNumber = generateAleatoryNumber();
    clearField();
    tries = 1;
    displayInicialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
