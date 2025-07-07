---
title: Introdução ao Pacote Shared
description: Um guia de instalação e visão geral do pacote @arkyn/shared.
---

O pacote `@arkyn/shared` é uma biblioteca de utilitários robusta e versátil, projetada para acelerar o desenvolvimento de aplicações, fornecendo um conjunto de funções prontas para uso que resolvem problemas comuns do dia a dia.

Desde a formatação e validação de dados específicos do contexto brasileiro, como CPF, CNPJ e CEP, até a geração de IDs únicos e manipulação de strings, o `@arkyn/shared` encapsula lógicas complexas em métodos simples e fáceis de usar.

## Instalação

Para começar a usar o pacote em seu projeto, instale-o utilizando seu gerenciador de pacotes de preferência:

```bash
npm install @arkyn/shared
```

```bash
yarn add @arkyn/shared
```

```bash
pnpm add @arkyn/shared
```

```bash
bun add @arkyn/shared
```

## Visão Geral

O pacote é organizado em quatro categorias principais de funcionalidades para facilitar a localização e o uso dos utilitários:

- **Validações**: Contém funções para validar diversos tipos de dados, como documentos (`validateCPF`, `validateCNPJ`), datas (`validateDate`), senhas (`validatePassword`) e muito mais.

- **Formatadores**: Oferece uma variedade de funções para formatar dados para exibição, como moedas (`formatToCurrency`), datas (`formatDate`), documentos (`formatToCPF`, `formatToCNPJ`) e outros padrões comuns.

- **Geradores**: Funções úteis para criar dados, como identificadores únicos (`generateID`) ou slugs a partir de strings (`generateSlug`).

- **Serviços**: Uma coleção de utilitários diversos que resolvem tarefas específicas, como mascarar dados sensíveis (`maskSensitiveData`), remover caracteres não numéricos (`removeNonNumeric`) ou calcular parcelas (`calculateCardInstallment`).

Com esses utilitários, você pode desenvolver aplicações mais robustas e consistentes, com menos código e mais produtividade. Navegue pelo menu lateral para explorar a documentação detalhada de cada função disponível.
