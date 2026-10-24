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
  }
}

module.exports = Vaga;
