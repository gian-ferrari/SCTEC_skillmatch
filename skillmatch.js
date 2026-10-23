const candidatos = require("./bd_candidatos");
const vagas = require("./db_vagas");
const Vaga = require("./vaga");

function buscaCandidatos() {
  return new Promise((resolve, reject) => {
    console.log("Buscando candidatos cadastradas...");
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