# SkillMatch JS


## Sobre o projeto

O SkillMatch JS é um simulador de compatibilidade entre candidatos e vagas fictícias de Desenvolvedor Front-end Júnior.

O programa compara habilidades e requisitos, calcula a compatibilidade, identifica habilidades faltantes e recomenda assunto faltantes para estudo. Os resultados são apresentados no terminal.


## Funcionalidades

- Carregar candidatos e vagas com simulação de busca em um servidor (cliente-servidor).
- Comparar as habilidades de cada candidato com cada vaga.
- Exibir habilidades compatíveis e faltantes.
- Calcular e classificar o percentual de compatibilidade.
- Identificar a melhor vaga para cada candidato.
- Recomendar habilidade(s) para estudo.
- Verificar a experiência mínima nas vagas que possuem essa exigência.


## Como executar

Sistema foi desenvolvido com o VS Code e foi testado com o Node via terminal do VS Code. Segue instruções de como executar.

1. Instale o Node.js.
2. Baixe ou clone este repositório.
3. Abra a pasta do projeto no VS Code.
4. Abra o terminal na pasta que contém `skillmatch.js`.
5. Execute:

`node skillmatch.js`


## Regra de cálculo da compatibilidade

Cada requisito possui o mesmo peso. A compatibilidade é calculada conforme a seguinte equação::

`Compatibilidade = (requisitos atendidos / total de requisitos) × 100`


## Classificação

Com base no valor obtido com o cálculo de compatibilidade, o candidato é classificado conforme a seguinte tabela.

| Percentual calculado | Classificação |
|---|---|
| Maior ou igual a 80% | Alta compatibilidade |
| Maior ou igual a 50% e menor que 80% | Média compatibilidade |
| Menor que 50% | Baixa compatibilidade |


## Escolha da melhor vaga

O programa percorre as vagas e guarda aquela com o maior percentual de compatibilidade para cada candidato. Em caso de empate, mantém a primeira na ordem de cadastro.

A escolha considera as habilidades técnicas. A experiência é verificada separadamente e não altera o percentual nem impede a seleção da vaga.

## Recomendação de estudo

O sistema recomenda a(s) habilidade(s) faltante(s) da vaga com maior compatibilidade. 


## Links mini projeto

- Quadro Kanban (Trello): **[https://trello.com/b/ziVv0DFX/sctecminiprojeto]**
- Repositório público (GitHub): **[https://github.com/gian-ferrari/SCTEC_skillmatch]**
- Vídeo: **[inserir link com acesso para visualização]**


## Autor

Gian Ferrari.
