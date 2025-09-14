# API de Adoção de Animais

Este projeto oferece uma API REST para gerenciamento de adoção de animais, construída com Node.js, Express e Prisma.

> **Repositório:**  
> [https://github.com/seu-usuario/Adocao_de_Animais_React](https://github.com/seu-usuario/Adocao_de_Animais_React)

---

## Pré-requisitos

- Node.js v16 ou superior
- npm ou yarn
- PostgreSQL instalado e em execução
- (Opcional) `nodemon` para desenvolvimento

---

## Passos para execução local

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/Adocao_de_Animais_React.git
cd Adocao_de_Animais_React/backend
```

### 2. Criar o banco de dados

No terminal do PostgreSQL ou cliente gráfico:

```sql
CREATE DATABASE adocao_animais;
```

### 3. Configurar variáveis de ambiente

1. Copie o arquivo de exemplo:

    ```bash
    cp .env.example .env
    ```
2. Edite o `.env`:

    ```dotenv
    DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/adocao_animais?schema=public"
    ```

### 4. Instalar dependências

```bash
npm install
# ou
yarn install
```

### 5. Gerar o cliente Prisma

```bash
npx prisma generate
```

### 6. Executar migrações

```bash
npx prisma migrate dev --name init
```

### 7. Scripts no `package.json`

```json
{
  "scripts": {
     "dev": "nodemon src/server.js",
     "start": "node src/server.js",
     "prisma": "prisma"
  }
}
```

### 8. Iniciar a aplicação

- **Desenvolvimento:**

  ```bash
  npm run dev
  ```
- **Produção:**

  ```bash
  npm start
  ```

A API estará disponível em `http://localhost:3001`.

---

## Testando a API

### No navegador (GET)

- Listar todos os animais: `http://localhost:3001/api/animal`
- Buscar animal por ID: `http://localhost:3001/api/animal/1`

### No Insomnia/Postman

- **POST** `/api/animal` (criar animal):

  ```json
  {
     "nome": "Rex",
     "especie": "Cachorro",
     "idade": 3
  }
  ```

- **PUT** `/api/animal/1` (atualizar animal):

  ```json
  {
     "nome": "Rex",
     "especie": "Cachorro",
     "idade": 4
  }
  ```

Exemplo cURL:

```bash
curl --request POST \
  --url http://localhost:3001/api/animal \
  --header 'Content-Type: application/json' \
  --data '{
     "nome": "Rex",
     "especie": "Cachorro",
     "idade": 3
  }'
```

---

## Endpoints principais

- `GET /api/animal` — lista todos os animais
- `GET /api/animal/:id` — busca animal por ID
- `POST /api/animal` — cria novo animal
- `PUT /api/animal/:id` — atualiza animal existente
- `DELETE /api/animal/:id` — remove animal

> Veja `src/routes/animalRoutes.js` para detalhes.

---

## Scripts úteis e ferramentas

- `npx prisma studio` — interface gráfica do Prisma
- `npx prisma migrate status` — status das migrações

---

## Contribuição

Contribuições são bem-vindas! Abra issues e pull requests.