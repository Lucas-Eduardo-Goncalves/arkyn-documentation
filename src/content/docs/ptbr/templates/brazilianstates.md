---
title: Estados Brasileiros
description: Documentação sobre o template `brazilianStates`, que fornece uma lista completa dos estados brasileiros com seus respectivos códigos de sigla.
---

A constante `brazilianStates` exporta um array de objetos, onde cada objeto representa um estado brasileiro e contém o nome completo do estado junto com sua sigla oficial.

Esta lista padronizada facilita a implementação de funcionalidades que exigem dados de estados brasileiros, como formulários de endereço, seletores de estado e validações de localização.

## Estrutura do objeto

Cada objeto no array `brazilianStates` segue a seguinte estrutura:

```typescript
interface BrazilianState {
  label: string;
  value: string;
}
```

- `label`: O nome completo do estado brasileiro (e.g., `"São Paulo"`).
- `value`: A sigla oficial do estado conforme estabelecida pelo IBGE (e.g., `"SP"`).

## Exemplo de uso

Para utilizar a lista de estados brasileiros em seu componente, basta importar o array do arquivo:

```tsx
import { brazilianStates } from "./brazilianStates";

function StateSelector() {
  return (
    <ul>
      {brazilianStates.map((state) => (
        <li key={state.value} value={state.value}>
          {state.label}
        </li>
      ))}
    </ul>
  );
}
```

## Exemplo de objeto (São Paulo)

```json
{
  "label": "São Paulo",
  "value": "SP"
}
```

## Lista completa

O array contém todos os 26 estados brasileiros mais o Distrito Federal:

- Acre (AC)
- Alagoas (AL)
- Amapá (AP)
- Amazonas (AM)
- Bahia (BA)
- Ceará (CE)
- Distrito Federal (DF)
- Espírito Santo (ES)
- Goiás (GO)
- Maranhão (MA)
- Mato Grosso (MT)
- Mato Grosso do Sul (MS)
- Minas Gerais (MG)
- Pará (PA)
- Paraíba (PB)
- Paraná (PR)
- Pernambuco (PE)
- Piauí (PI)
- Rio de Janeiro (RJ)
- Rio Grande do Norte (RN)
- Rio Grande do Sul (RS)
- Rondônia (RO)
- Roraima (RR)
- Santa Catarina (SC)
- São Paulo (SP)
- Sergipe (SE)
- Tocantins (TO)
