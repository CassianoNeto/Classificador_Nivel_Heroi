// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

let heroi = 'Oryon';
let currentExp = 0;
const totalExp = 10000;
let jogando = true;

function calculoGanhoPerdaXP(currentExp, jogada, limite){
    if(jogada < 4){
        const reducao = Math.round((currentExp-limite) * 0.1);
        currentExp -= reducao;
        currentExp = Math.max(currentExp, limite);
    }else{
        currentExp += 200;
    }
    return currentExp
}

function statusAtual(xpAtual) {
    let Nivel = "";
  
    if (xpAtual <= 1000) {
      Nivel = "Ferro";
    } else if (xpAtual <= 2000) {
      Nivel = "Bronze";
    } else if (xpAtual <= 5000) {
      Nivel = "Prata";
    } else if (xpAtual <= 7000) {
      Nivel = "Ouro";
    } else if (xpAtual <= 8000) {
      Nivel = "Patina";
    } else if (xpAtual <= 9000) {
      Nivel = "Ascendente";
    } else if (xpAtual <= 10000) {
      Nivel = "Imortal";
    } else {
      Nivel = "Radiante";
    }
  
    return Nivel;
  }

function executeLoop() {
  
    process.stdout.clearLine(); // Limpa a linha anterior
    process.stdout.cursorTo(0); // Move o cursor para a coluna 0

    let jogada = Math.floor(Math.random() * 11);

    switch (jogando) {
      case currentExp <= 1000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=0)
        break;
      case currentExp < 2000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=1000)
        break;
      case currentExp < 5000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=2000)
        break;
      case currentExp < 7000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=5000)
        break;
      case currentExp < 8000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=7000)
        break;
      case currentExp < 9000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=8000)
        break;
      case currentExp < 10000:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=9000)
        break;
      default:
        currentExp = calculoGanhoPerdaXP(currentExp, jogada, limite=10000)
    }
    
    process.stdout.write('O herói de nome ' + heroi + ' está no nivel ' + statusAtual(currentExp) + '. Progresso da XP ' + currentExp + '/' + totalExp);

    setTimeout(executeLoop, 1000);
  
}
executeLoop()
