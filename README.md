# SkillMatch JS


## Sobre o projeto

O SkillMatch JS é um simulador de compatibilidade entre candidatos e vagas fictícias de Desenvolvedor Front-end Júnior.

O programa compara habilidades e requisitos, calcula a compatibilidade, identifica habilidades faltantes e recomenda assunto faltantes para estudo. Os resultados são apresentados no terminal.


## Funcionalidades

- Carregar candidatos e vagas com simulação de busca em um servidor.
- Comparar as habilidades de cada candidato com cada vaga.
- Exibir habilidades compatíveis e faltantes.
- Calcular e classificar o percentual de compatibilidade.
- Identificar a melhor vaga para cada candidato.
- Recomendar habilidade(s) para estudo.
- Verificar a experiência mínima nas vagas que possuem essa exigência.


## Como executar

1. Instale o Node.js.
2. Baixe ou clone este repositório.
3. Abra a pasta do projeto no VS Code.
4. Abra o terminal na pasta que contém `skillmatch.js`.
5. Execute:

node skillmatch.js


## Organização dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `skillmatch.js` | Carregar dados, organizar comparações e apresentar resultados. |
| `bd_candidatos.js` | Armazenar os perfis em um array de objetos. |
| `bd_vagas.js` | Armazenar as vagas fictícias e os requisitos. |
| `vaga.js` | Definir a classe `Vaga` e comparar habilidades. |
| `vaga_com_experiencia.js` | Especializar `Vaga` com verificação de experiência mínima. |
| `README.md` | Documentar o funcionamento e as decisões. |

## Regra de cálculo da compatibilidade

Cada requisito possui o mesmo peso:

Compatibilidade = (requisitos atendidos / total de requisitos) × 100


## Classificação

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

- Quadro Kanban: **[inserir link]**
- Repositório público: **[inserir link]**
- Vídeo: **[inserir link com acesso para visualização]**


## Autor

Gian Ferrari.
