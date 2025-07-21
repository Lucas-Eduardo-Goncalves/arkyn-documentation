---
title: Entidade Webhook (Webhook)
---

A entidade `Webhook` representa um endpoint de notificação configurado para receber alertas automáticos quando eventos específicos ocorrem no sistema Arkyn Logs. Cada webhook está associado a uma `TrafficSource` e permite que o sistema envie notificações em tempo real para serviços externos.

## Atributos principais

- **id**: Identificador único para cada webhook.
- **type**: Tipo do webhook (atualmente suporta apenas "discord").
- **level**: Nível de severidade que dispara o webhook ("fatal", "warning", "info").
- **value**: URL ou configuração específica do webhook (ex: URL do Discord webhook).
- **trafficSourceId**: Chave estrangeira que vincula o webhook a uma `TrafficSource`.
- **createdAt**: Data e hora de criação do registro.
- **updatedAt**: Data e hora da última atualização do registro.

## Tipos de webhook suportados

### Discord

- **Tipo**: `discord`
- **Descrição**: Envia notificações para canais do Discord através de webhooks do Discord.
- **Configuração**: Requer a URL completa do webhook do Discord.

## Níveis de severidade

Os webhooks podem ser configurados para diferentes níveis de severidade:

- **fatal**: Erros críticos que requerem atenção imediata
- **warning**: Alertas importantes que devem ser monitorados
- **info**: Informações gerais sobre o sistema

## Relacionamentos

- [**TrafficSource**](/ptbr/trafficsource/introduction): Cada webhook pertence a uma única fonte de tráfego.

## Regras de negócio

1. **Unicidade por nível**: Cada `TrafficSource` pode ter apenas um webhook por nível de severidade.
2. **Propriedade**: Apenas o proprietário da `TrafficSource` pode gerenciar seus webhooks.
3. **Tipos suportados**: Atualmente, apenas webhooks do Discord são suportados.

## Resumo

Os webhooks no Arkyn Logs funcionam como um sistema de notificação em tempo real, permitindo que os usuários recebam alertas automáticos sobre eventos importantes em suas aplicações monitoradas.
