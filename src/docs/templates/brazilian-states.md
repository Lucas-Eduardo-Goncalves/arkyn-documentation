# Brazilian States

The `brazilianStates` const exports an array of objects, where each object represents a Brazilian state and contains the full name of the state along with its official acronym.

This standardized list facilitates the implementation of features that require data from Brazilian states, such as address forms, state selectors, and location validations.

## Object structure

Each object in the `brazilianStates` array follows the following structure:

```typescript
interface BrazilianState {
  label: string;
  value: string;
}
```

- `label`: The full name of the Brazilian state (e.g., `"São Paulo"`).
- `value`: The official state abbreviation as established by the IBGE (e.g., `"SP"`).

## Usage example

To use the list of Brazilian states in your component, simply import the array from the file:

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

## Example object (São Paulo)

```json
{
  "label": "São Paulo",
  "value": "SP"
}
```

## Complete list

The array contains all 26 Brazilian states plus the Federal District:

- Acre (AC)
- Alagoas (AL)
- Amapá (AP)
- Amazonas (AM)
- Bahia (BA)
- Ceará (CE)
- Federal District (DF)
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
