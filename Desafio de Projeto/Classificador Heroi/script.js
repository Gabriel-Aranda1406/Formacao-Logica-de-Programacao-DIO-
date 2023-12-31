let nomeHeroi = "Hercules";
let xpHeroi = 9999;
let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (xpHeroi <= 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[0])     
} else if (xpHeroi === 1001 || xpHeroi <= 2000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[1])
} else if (xpHeroi === 2001 || xpHeroi <= 5000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[2])    
} else if (xpHeroi === 6001 || xpHeroi <= 7000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[3])    
} else if (xpHeroi === 7001 || xpHeroi <= 8000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[4])
} else if (xpHeroi === 8001 || xpHeroi <= 9000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[5])    
} else if (xpHeroi === 9001 || xpHeroi <= 10000) {
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[6])
} else {
    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi[7])    
}