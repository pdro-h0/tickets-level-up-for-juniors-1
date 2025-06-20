<p align="center">
Este projeto foi feito em aula do evento level up for juniors da FullCyle. <br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Express
- Nodejs
- Typescript
- MySQL 

## 💻 Projeto

Neste projeto eu realizei o backend de uma aplicação que permite a criação, gerenciamento e venda de ingressos para eventos por meio de parceiros. Ele será escalável para lidar com milhares de acessos simultâneos.

---

## 🤔 Instruções

### Primeiros passos:

Primeiramente baixe o arquivo backend no [GitHub](https://github.com/pdro-h0/tickets-level-up-for-juniors-1/), no seu terminal, execute o seguinte comando na raiz da pasta criada:

`npm install`

E então rode o comando do [docker-compose](https://docs.docker.com/compose/):

`docker-compose up -d`
ou
`docker compose up -d`

Em seguida, rode:
`npm run dev`

---

### Regras de negócio

- Apenas o parceiro criador do evento pode gerenciar os tickets associados.
- Tickets são criados em lote e começam com o status "disponível".
- Um cliente pode comprar vários tickets de diferentes eventos em uma única compra.
- Somente um cliente pode comprar um ticket específico por vez (controle de concorrência).
- Se a compra falhar, os dados devem ser registrados com o motivo da falha.
- Um cliente pode cancelar a compra, liberando os tickets para venda novamente.
- O histórico de alterações de status deve ser mantido.
- O sistema deve suportar altas cargas de acesso simultâneo.
- Parceiros serão registrados no sistema e terão acesso a um painel de controle.
- Parceiros podem criar eventos e gerenciar os tickets associados.
- Parceiros podem visualizar as vendas de tickets associadas aos seus eventos.
- Clientes serão registrados no sistema e poderão comprar tickets para eventos.
- Clientes podem visualizar os eventos disponíveis e comprar tickets.
- Clientes podem cancelar suas compras e visualizar o histórico de compras.

---

Feito com ♥ by Pedro Henrique