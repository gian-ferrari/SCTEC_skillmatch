const candidatos = require("./bd_candidatos");
const vagas = require("./db_vagas");
const Vaga = require("./vaga");

function buscaVaga() {
  return new Promise((resolve, reject) => {
    console.log("Buscando vagas cadastradas...");
    //simula fetch dos dados na api de vaga;
    setTimeout(() => {
      if (vaga !== null && vaga.length > 0) {
        resolve(vaga);
      } else {
        reject("Não foi possível carregar os vagas cadastradas!");
      }
    }, 1000);
  });
}
