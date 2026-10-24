const Vaga = require("./vaga");

class VagaComExperiencia extends Vaga {
  constructor(empresa, cargo, requisitos, experienciaMinimaAnos) {
    super(empresa, cargo, requisitos);
    this.experienciaMinimaAnos = experienciaMinimaAnos;
    this.tipo = "Com experiência";
  }

  verificarExperiencia(candidato) {
    
    console.log(`Experiência mínima exigida: ${this.experienciaMinimaAnos} ano(s).`);
    console.log(`Experiência do candidato: ${candidato.tempoExperienciaAnos} ano(s).`);

    if (candidato.tempoExperienciaAnos >= this.experienciaMinimaAnos) {
      console.log("O candidato atende à experiência mínima.");
    } else {
      console.log("O candidato não atende à experiência mínima.");
    }
  }
}

module.exports = VagaComExperiencia;
