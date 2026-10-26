const Vaga = require("./vaga");

class VagaComExperiencia extends Vaga {
  constructor(empresa, cargo, requisitos, experienciaVagaAnos) {
    super(empresa, cargo, requisitos);
    this.experienciaVagaAnos = experienciaVagaAnos;
    this.tipo = "Com experiência";
  }

  verificarExperiencia(candidato) {
    
    console.log(`Experiência da Vaga: ${this.experienciaVagaAnos} ano(s).`);
    console.log(`Experiência do candidato: ${candidato.tempoExperienciaAnos} ano(s).`);

    if (candidato.tempoExperienciaAnos >= this.experienciaVagaAnos) {
      console.log("O candidato possui experiência para a vaga.");
    } else {
      console.log("O candidato não possui a experiência para vaga.");
    }
  }
}

module.exports = VagaComExperiencia;
