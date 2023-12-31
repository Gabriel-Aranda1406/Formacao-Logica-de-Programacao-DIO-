const nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let saldoPartidas = resultadoVitorias(2093, 1998);

function resultadoVitorias(vitorias, derrotas){
    let vitoriasHeroi = vitorias - derrotas;
    return vitoriasHeroi
}

if(saldoPartidas <= 10) {
    console.log("O Herói tem o saldo de " + saldoPartidas + " vitórias e está no nível " + nivelHeroi[0]);
} else if (saldoPartidas === 11 || saldoPartidas <= 20 ) {
    console.log("O Herói tem o saldo de " + saldoPartidas + " vitórias e está no nível " + nivelHeroi[1]);
} else if (saldoPartidas=== 21 || saldoPartidas <= 50 ) {
    console.log("O Herói tem o saldo de " + saldoPartidas + " vitórias e está no nível " + nivelHeroi[2]);
} else if (saldoPartidas === 51 || saldoPartidas <= 80 ) {
    console.log("O Herói tem o saldo de " + saldoPartidas + " vitórias e está no nível " + nivelHeroi[3]);
} else if (saldoPartidas === 81 || saldoPartidas <= 90 ) {
    console.log("O Herói tem o saldo de " + saldoPartidas + " vitórias e está no nível " + nivelHeroi[4]);
} else if (saldoPartidas === 91 || saldoPartidas <= 100 ) {
    console.log("O Herói tem o saldo de " + saldoPartidas + " vitórias e está no nível " + nivelHeroi[5]);
} else {
    console.log("O Herói tem o saldo de " + saldoPartidas + " vitórias e está no nível " + nivelHeroi[6]);
}