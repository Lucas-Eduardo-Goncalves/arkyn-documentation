---
title: generateSlug
description: Gera um slug amigável para URL a partir de uma string.
---

A função `generateSlug` converte uma string de entrada em um "slug" amigável para URLs, realizando uma série de transformações para garantir que o resultado seja limpo e adequado para uso em endereços web.

## Parâmetros

A função aceita o seguinte parâmetro:

**`prop`**

- **Tipo**: `string`
- **Descrição**: A string de entrada a ser convertida em um slug.
- **Obrigatório**: Sim
- **Padrão**: N/A

## Retorno

A função retorna uma `string` que é o slug amigável para URL derivado da string de entrada.

## Processo de Transformação

1.  **Normalização**: Remove acentos e outros caracteres diacríticos.
2.  **Remoção de Caracteres**: Elimina caracteres não alfanuméricos, exceto espaços e hífens.
3.  **Substituição de Espaços**: Substitui um ou mais espaços por um único hífen.
4.  **Minúsculas**: Converte toda a string para letras minúsculas.
5.  **Limpeza de Hífens**: Remove hífens duplicados, bem como hífens no início ou no final da string.

## Exemplo de Uso

```javascript
import { generateSlug } from "./generateSlug";

const texto = "  Exemplo de Título com Acentuação e Espaços!!  ";
const slug = generateSlug(texto);

console.log(slug); // Saída: "exemplo-de-titulo-com-acentuacao-e-espacos"
```
