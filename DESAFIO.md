## 🎯 Objetivo

Configurar uma pipeline para um projeto com testes automatizados, preferencialmente utilizando um projeto criado em outra disciplina da pós-graduação.

### Requisitos da Pipeline

#### Formas de Disparo

A pipeline deve permitir execução através de:

- ✅ Manual
- ✅ Agendada (Schedule)
- ✅ A partir de Push

> Os três tipos de disparo devem estar configurados na mesma pipeline.

#### Relatórios

- Configurar um relatório compatível com o framework de testes utilizado.
- Realizar o upload do relatório como artefato da pipeline.
- Pesquisar e utilizar formatos, ferramentas ou Actions adequadas para geração e armazenamento dos relatórios.

#### Documentação

- Criar um README explicando:
  - Funcionamento da pipeline.
  - Conceitos aplicados.
  - Ferramentas utilizadas.
  - Estratégia de execução dos testes.
  - Configuração dos gatilhos.

---

## 📋 Regras

### Requisitos Obrigatórios

- Trabalho individual.
- Utilizar GitHub Actions.
- Testes automatizados executando com sucesso.
- Pipeline executando com sucesso.
- Relatório armazenado na pipeline.
- Aplicação adequada dos conceitos aprendidos na disciplina.
- Utilização correta das ferramentas selecionadas.
- Documentação adequada no README.

---

## 🚀 Funcionalidades Implementadas

### Execução da Pipeline

- [ X ] Execução manual (`workflow_dispatch`)
- [ X ] Execução agendada (`schedule`)
- [ X ] Execução automática via Push (`push`)

### Testes Automatizados

- [ X ] Execução dos testes automatizados
- [ X ] Validação do resultado da execução
- [ X ] Pipeline finalizando com sucesso

### Relatórios

- [ X ] Geração de relatório dos testes
- [ X ] Upload do relatório como artefato
- [ X ] Disponibilização para download na execução da pipeline

### Documentação

- [ ] Explicação dos gatilhos da pipeline
- [ ] Explicação dos jobs e steps
- [ ] Explicação das ferramentas utilizadas
- [ ] Explicação da estratégia adotada

---

## 📦 Tecnologias Utilizadas

| Categoria            | Ferramenta     |
| -------------------- | -------------- |
| Controle de Versão   | Git / GitHub   |
| CI/CD                | GitHub Actions |
| Testes Automatizados | Mocha          |
| Relatórios           | Mochawesome    |
| Linguagem            | JavaScript     |

---

## 🔗 Entrega

### Informações da Entrega

- URL do repositório GitHub contendo o projeto.
- Pelo menos uma execução da pipeline concluída com sucesso.
- Entrega realizada pela plataforma da disciplina.

### Prazo

📅 **21/06 às 23:59**
