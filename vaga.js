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

    const atendeTodos = this.requisitos.every((requisito) => {
      return possui.includes(requisito);
    });

    if (possui.length > 0) {
      console.log(`Habilidades compatíveis: ${possui.join(", ")}.`);
    } else {
      console.log("Nenhuma habilidade compatível.");
    }

    if (atendeTodos) {
      console.log("Não falta nenhuma habilidade.");
    } else {
      console.log(`Habilidades faltantes: ${falta.join(", ")}.`);
    }

    let percentual = 0;

    if (this.requisitos.length > 0) {
      percentual = (possui.length / this.requisitos.length) * 100;
    }

    let classificacao;

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
