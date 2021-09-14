# Create npm project (Server, Web, Mobile)

References:

https://knexjs.org/

## Create server:

```bash
npm init
npm i --save-dev typescript 
npm i --save-dev @types/express
npm i --save-dev ts-node
npm i --save-dev ts-node-dev
npm install knex
npx tsc --init
npx ts-node src/server.ts
```

OBS.: package.json

```json
  "scripts": {
    "dev": "ts-node-dev src/server.ts "},
```

```bash
npm run dev
```

## Create Web

```bash
npx create-react-app web --template=typescript
```

```bash
n
```



