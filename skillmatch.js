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

<<<<<<< HEAD
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

=======
  //console.log(listaVagas);
>>>>>>> 8ebdbe8e00e60f3137c7164f82c9764df94642a4
  const candidatosDisponiveis = await buscaCandidatos();

  console.log("Comparando candidatos com as vagas...");
  candidatosDisponiveis.forEach((candidato) => {
    console.log("");
    console.log(`Candidato: ${candidato.nome}`);
    console.log(`Área de interesse: ${candidato.area}`);
    console.log("------");

    let melhorVaga = null;
    let maiorPercentual = -1;
    let habilidadesFaltantes = [];

    listaVagas.forEach((vaga) => {
      console.log(`Vaga: ${vaga.cargo}`);
      console.log(`Empresa: ${vaga.empresa}`);

<<<<<<< HEAD
      vaga.compararCompatibilidade(candidato.habilidades);

      if (vaga.tipo === "Com experiência") {
        vaga.verificarExperiencia(candidato);
      }

      console.log("------");
=======
      const resultado = vaga.compararCompatibilidade(candidato.habilidades);

      if (resultado.percentual > maiorPercentual) {
        melhorVaga = vaga;
        maiorPercentual = resultado.percentual;
        habilidadesFaltantes = resultado.faltantes;
      }

      console.log("-----");
>>>>>>> 8ebdbe8e00e60f3137c7164f82c9764df94642a4
    });

    if (melhorVaga !== null) {
      console.log("VAGA COM MAIOR COMPATIBILIDADE");
      console.log(`Vaga: ${melhorVaga.cargo}`);
      console.log(`Empresa: ${melhorVaga.empresa}`);
      console.log(`Compatibilidade: ${maiorPercentual.toFixed(1)}%`);

      if (habilidadesFaltantes.length > 0) {
        console.log(
          `Recomendação de estudo: estudar ${habilidadesFaltantes[0]}.`,
        );
      } else {
        console.log("Você já possui todas as habilidades exigidas nessa vaga.");
      }
    } else {
      console.log("Nenhuma vaga disponível para comparação.");
    }

    console.log("======");
  });
}

main();
