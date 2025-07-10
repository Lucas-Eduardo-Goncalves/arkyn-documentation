---
title: Países
description: Documentação sobre o template `countries`, que fornece uma lista de países com informações úteis para formulários e componentes de seleção de país.
---

O arquivo `countries.ts` exporta um array de objetos, onde cada objeto representa um país e contém informações úteis para componentes de interface, como seletores de país em formulários de número de telefone.

Esta lista padronizada facilita a implementação de funcionalidades que exigem dados de países, como códigos de discagem, bandeiras e máscaras de formatação de telefone.

## Estrutura do Objeto

Cada objeto no array `countries` segue a seguinte estrutura:

```typescript
interface Country {
  name: string;
  code: string;
  prefix: string | null;
  iso: string;
  flag: string;
  mask: string;
}
```

- `name`: O nome oficial do país (e.g., `"Brasil"`).
- `code`: O código de discagem internacional (e.g., `"+55"`).
- `prefix`: Um prefixo telefônico específico que pode ser necessário para algumas regiões ou tipos de número. É `null` se não for aplicável.
- `iso`: O código ISO 3166-1 alfa-2 do país (e.g., `"BR"`).
- `flag`: A URL para a imagem SVG da bandeira do país.
- `mask`: Uma máscara de formatação para números de telefone, onde `_` representa um dígito a ser inserido (e.g., `"(__) _____-____"`).

## Exemplo de Uso

Para utilizar a lista de países em seu componente, basta importar o array do arquivo:

```typescript
import { countries } from "./countries";

function CountrySelector() {
  return (
    <select>
      {countries.map((country) => (
        <option key={country.iso} value={country.code}>
          <img src={country.flag} alt={country.name} />
          {country.name} ({country.code})
        </option>
      ))}
    </select>
  );
}
```

## Exemplo de Objeto (Brasil)

```json
{
  "name": "Brasil",
  "code": "+55",
  "prefix": null,
  "iso": "BR",
  "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
  "mask": "(__) _____-____"
}
```
