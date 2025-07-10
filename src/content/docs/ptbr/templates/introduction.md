---
title: "Introdução ao @arkyn/templates"
description: "Um guia sobre o pacote @arkyn/templates, que oferece uma coleção de templates e constantes prontas para uso."
---

O pacote `@arkyn/templates` é uma biblioteca complementar que fornece um conjunto de estruturas de dados e constantes prontas para uso, projetadas para agilizar o desenvolvimento de funcionalidades que dependem de informações padronizadas, como listas de países ou configurações de moeda.

Em vez de recriar essas estruturas em cada projeto, o `@arkyn/templates` oferece uma fonte centralizada e bem organizada, economizando tempo e garantindo consistência.

## Instalação

Para começar a usar o pacote em seu projeto, instale-o utilizando seu gerenciador de pacotes de preferência:

```bash
npm install @arkyn/templates
```

```bash
yarn add @arkyn/templates
```

```bash
pnpm add @arkyn/templates
```

```bash
bun add @arkyn/templates
```

## Visão Geral

O pacote é composto por módulos que exportam dados úteis para diversas finalidades:

- **`countries`**: Fornece uma lista completa de países, incluindo nome, código de discagem, código ISO, URL da bandeira e máscara de formatação para números de telefone. Ideal para seletores de país e formulários de contato.

- **`countryCurrencies`**: Oferece um mapeamento de códigos de moeda para configurações de localidade, facilitando a formatação de valores monetários de acordo com as convenções de cada país.

Navegue pelo menu lateral para explorar a documentação detalhada de cada template e ver exemplos de como integrá-los em sua aplicação.
