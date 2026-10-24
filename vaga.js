class Vaga {
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  compararCompatibilidade(habilidades) {
    const possui = [];
    const falta = [];

    this.requisitos.forEach((requisito) => {
      const encontrado = habilidades.find((item) => {
        return item.toLowerCase() === requisito.toLowerCase();
      });

      if (encontrado) {
        possui.push(requisito);
      } else {
        falta.push(requisito);
      }
    });

    if (possui.length > 0) {
      console.log(`Habilidades compatíveis: ${possui.join(", ")}.`);
    } else {
      console.log("Nenhuma habilidade compatível.");
    }

    if (falta.length > 0) {
      console.log(`Habilidades faltantes: ${falta.join(", ")}.`);
    } else {
      console.log("Não falta nenhuma habilidade.");
    }

    let percentual = 0;
    let classificacao;
    
    if (this.requisitos.length > 0) {
      percentual = (possui.length / this.requisitos.length) * 100;
    }

    if (percentual >= 80) {
      classificacao = "Alta compatibilidade";
    } else if (percentual >= 50) {
      classificacao = "Média compatibilidade";
    } else {
      classificacao = "Baixa compatibilidade";
    }

    console.log(`Compatibilidade: ${percentual.toFixed(1)}%`);
    console.log(`Classificação: ${classificacao}`);

    return {
      percentual: percentual,
      faltantes: falta,
    };
  }
}

module.exports = Vaga;
