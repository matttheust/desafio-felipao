function rank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";
  
    if (vitorias < 10) {
      elo = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      elo = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      elo = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      elo = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      elo = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      elo = "Lendário";
    } else {
      elo = "Imortal";
    }
  
    console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${elo}`);
  }
  
  const vitoriasfix = 38;
  const derrotasfix = 20;
  rank(vitoriasfix, derrotasfix);
  