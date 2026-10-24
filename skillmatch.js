const candidatos = require("./bd_candidatos");
const vagas = require("./bd_vagas");
const Vaga = require("./vaga");
const VagaComExperiencia = require("./vaga_com_experiencia");

function buscaCandidatos() {
  return new Promise((resolve, reject) => {
    console.log("Buscando candidatos cadastrados...");
    //simula fetch dos dados na api de candidato;
    setTimeout(() => {
      if (candidatos !== null && candidatos.length > 0) {
        resolve(candidatos);
      } else {
        reject("Não foi possível carregar o(s) candidato(s)!");
      }
    }, 1000);
  });
}

function buscaVagas() {
  return new Promise((resolve, reject) => {
    console.log("");
    console.log("Buscando vagas cadastradas...");
    setTimeout(() => {
      if (vagas !== null && vagas.length > 0) {
        resolve(vagas);
      } else {
        reject("Não foi possível carregar as vagas!");
      }
    }, 2000);
  });
}

async function main() {
  const vagasResponse = await buscaVagas();

  const listaVagas = vagasResponse.map((vagaObj) => {
    if (vagaObj.experienciaMinimaAnos !== undefined) {
      return new VagaComExperiencia(
        vagaObj.empresa,
        vagaObj.cargo,
        vagaObj.requisitos,
        vagaObj.experienciaMinimaAnos,
      );
    } else {
      return new Vaga(vagaObj.empresa, vagaObj.cargo, vagaObj.requisitos);
    }
  });

  const candidatosDisponiveis = await buscaCandidatos();

  console.log("Comparando candidatos com as vagas...");

  candidatosDisponiveis.forEach((candidato) => {
    console.log("");
    console.log("***********************");
    console.log(`Candidato: ${candidato.nome}`);
    console.log(`Área de interesse: ${candidato.area}`);
    console.log("------");

    listaVagas.forEach((vaga) => {
      console.log(`Vaga: ${vaga.cargo}`);
      console.log(`Empresa: ${vaga.empresa}`);

      vaga.compararCompatibilidade(candidato.habilidades);

      if (vaga.tipo === "Com experiência") {
        vaga.verificarExperiencia(candidato);
      }

      console.log("------");
    });
  });
}

main();
