# Backend da Aplicação de Gerenciamento de Empresas

Este é o projeto de backend para uma aplicação de gerenciamento de empresas. Ele fornece uma API para criar, ler, atualizar e excluir informações de empresas. O projeto utiliza tecnologias modernas, incluindo Node.js, Express, TypeORM e MySQL.

## Requisitos

Antes de prosseguir, certifique-se de ter o Node.js instalado no seu sistema. Se você não o tiver, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://seu-repositorio.git
   cd backend_company

   ```

2. Instale as dependências:

   ```bash
   npm i
   ```

3. Configure as variáveis de ambiente

   ```bash
   ex:
   TYPEORM_HOST="localhost"
   TYPEORM_PORT="3306"
   TYPEORM_USERNAME="root"
   TYPEORM_PASSWORD="root"
   TYPEORM_DATABASE="backend_company"
   LOCAL_PORT="3000"
   ```

4. Excute o servidor:

   ```bash
   npm run dev:server
   ```

5. Se caso necessário execute as migrações:

   ```bash
   npm run typeorm migration:run
   ```

Rotas da API
O backend oferece as seguintes rotas da API:

GET /companies: Retorna a lista de todas as empresas.
GET /companies/:id: Retorna os detalhes de uma empresa com base no ID.
POST /companies: Cria uma nova empresa com base nos dados fornecidos no corpo da solicitação.
PUT /companies/:id: Atualiza os dados de uma empresa com base no ID.
DELETE /companies/:id: Exclui uma empresa com base no ID.
Certifique-se de verificar a documentação da API ou as rotas definidas no código-fonte para obter mais detalhes sobre como usar a API.

Tecnologias Principais
Node.js: Um ambiente de tempo de execução JavaScript.
Express: Um framework web para Node.js.
TypeORM: Um ORM (Object-Relational Mapping) para TypeScript e JavaScript.
MySQL: Um sistema de gerenciamento de banco de dados relacional.
TypeScript: Uma linguagem que adiciona tipagem estática ao JavaScript.
